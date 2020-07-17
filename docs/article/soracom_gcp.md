<!---
 Title: SORACOM InventoryをゲートウェイにGoogle Cloud Platform上のBigQueryにデータを格納する
 Tags: IoT
 Date: 2020-07-10
-->

# SORACOM InventoryからGoogle Cloud Platform上のBigQueryにデータを格納する

## 概要

WiFi or 公衆無線網を使って、SORACOM経由でGCP上にデータを格納する。

## アーキテクチャ図

（作成中）

### 注意

Dataflowをe2-mediumインスタンスにより、ストリーミングモードで常時起動する想定です。
最低でも &yen; (計算中) /month 程度の請求がかかります。

## 準備
各題末日の括弧はそれを実施するアカウントです。

$で始まる単語は、後方参照のための変数です。定義時は**このスタイル**で、参照時は*こちらのスタイル*で記載します。

### プロジェクトの作成とAPIの有効化 (オーナー)
プロジェクト ID: **$project**

下記のAPIを有効化します。

1. Cloud Pub/Sub
1. Dataflow
1. BigQuery
1. Storage

### ユーザーの作成 (オーナー)

次のユーザーを作成します。

1. **$Manager** アーキテクチャを構成する人

専用のロールを割り当て次の権限を追加します。

- bigquery.datasets.create
- bigquery.jobs.create
- bigquery.tables.create
- bigquery.tables.updateData
- compute.machineTypes.get
- dataflow.jobs.create
- pubsub.subscriptions.create
- pubsub.topics.attachSubscription
- pubsub.topics.create
- resourcemanager.projects.get
- resourcemanager.projects.getIamPolicy
- storage.buckets.create
- storage.objects.create

*$Manager*の操作は、1度だけ実施するためgsutilを使ったCLIでのバッチ処理を想定しています。
[Cloud SDK](https://cloud.google.com/sdk/docs)のインストールを行っておいてください。


### サービスアカウント[^1] (オーナー)

[^1]: GCPのシステム上で、各コマンドをサービスとして実行するためのアカウント

次のアカウントを作成

#### Pub/Subパブリッシャー

- サービスアカウントID: **$publisher**
- ロール: Pub/Sub パブリッシャー
- JSONキー: **$publisher_key**

##### CLIを使う場合

```powershell
; パブリッシャー作成
gcloud iam service-accounts create *$publisher* --display-name *"Soracom Funnel Publisher"* --project *$project*

; サービスアカウントをプロジェクトメンバーに追加し、ロールを付与
gcloud projects add-iam-policy-binding *$project* --member serviceAccount:*$publisher*@*$project*.iam.gserviceaccount.com* --role roles/pubsub.publisher

; JSONキーを作成する -> カレントディレクトリに保存される
gcloud iam service-accounts keys create *$publisher_key*.json --iam-account *$publisher*@*$project*.iam.gserviceaccount.com*
```

#### Dataflowジョブランナー

- サービスアカウントID: **$job_runner**
- ロール: Dataflow ワーカー, Pub/Sub サブスクライバー, BigQuery データ編集者

このサービスアカウントのユーザーロールとして、*$Manager*を割り当てておきます。



## 手順

### Cloud Pub/Subの構成 (*$Manager*)

Cloud Pub/Subは、SORACOM Funnelからデータを受信する受け口になります。

- トピックス名: **$topic**
- サブスクリプション名: **$subscription**

```powershell
gcloud pubsub topics create *$topic* --project *$project*
gcloud pubsub subscriptions create --topic iottopic subsc --project *$project*
```

### SORACOM Funnelにパブリッシャーを登録 (？？？)

オーナー or *$Manager*のどちらが適任か要検討

サービスアカウントのJSONキーを扱うためオーナーか、トピックの作成責任がある *$Manager*か

```SORACOM Console
転送先サービス: Google Cloud Pub/Sub
転送先トピック: *$topic*
認証情報: *$publisher_key*
送信データ形式: JSON
```


### BigQueryテーブルスキームを作成

BigQueryはSORACOM Funnelから送信されたデータを保持しておくためのインスタンスです。
分析開発用環境としての運用を考えているため、テーブルのデフォルト有効期限は無期限とします。

- データセット名: **$dataset**
- テーブル名: **$table**

今回は、テーブルスキーマが次の想定をしています。

|deviceId|lastModifiedTime|path  |value|
|--------|----------------|------|-----|
|STRING  |INTEGER         |STRING|FLOAT|


```powershell
bq --location=asia-northeast1 mk --dataset --description "Description by ascii charset" *$project*:*$dataset*
bq mk --table --time_partitioning_type=DAY --description "Description for ascii charset" *$project*:*$dataset*.*$table* deviceId:STRING,lastModifiedTime:INTEGER,path:STRING,value:FLOAT
```

### Dataflowを構成

#### 一時保存用バケットとInvoke UDFを準備

Dataflowでは、データの一時保存ようにCloud Storageを利用しますのでバケットを用意します。

- バケット名: **$bucket**
- UDF定義ファイル名: **$udf.js**


```powershell
gsutil mb -p *$project* gs://*$bucket*
```

Dataflow時にSORACOM Funnelから送信されたデータをBigQueryテーブルに変換するInvoke UDFを用意します。

下記の例は、デバイスからLwM2Mプロトコルで送信されたデータの内、オブジェクトIDが5700と5852のモノを処理する内容になっています。

```javascript:*$udf.js*
/**
 * A transform which adds a field to the incoming data.
 * @param {string} input
 * @return {string} output
 */
function transform(input) {
  var record = JSON.parse(input);
  var output = {
    deviceId: record.deviceId,
    lastModifiedTime: record.lastModifiedTime,
    path: record.path,
  };

  var keys = ["5700", "5852"];
  for(var i=0; i<keys.length; i++) {
    if (record.resources[keys[i]]) {
      output.value = record.resources[keys[i]].value;
      output.path += "/" + keys[i];
      return JSON.stringify(output);
    }
  }

  console.error(input);
}
```

このUDFをバケット上に配置します。[^2]

```powershell
gsutil cp .\*$udf.js* gs://*$bucket*/script/
```



#### Dataflow ジョブを作成

Dataflowは、GCP上の各インスタンス間でのデータのやり取りを行います。ここでは、Cloud Pub/SubサブスクリプションからBigQueryテーブルにデータを流します。

```powershell
gcloud dataflow jobs run pubsub_to_bigquery --region asia-northeast1 --gcs-location gs://dataflow-templates/latest/PubSub_Subscription_to_BigQuery --parameters "inputSubscription=projects/*$project*/subscriptions/*$subscription*,outputTableSpec=*$project*:*$dataset*.*$table*,javascriptTextTransformGcsPath=gs://*$bucket*/script/*$udf.js*,javascriptTextTransformFunctionName=transform" --service-account-email *$job_runner*@*$project*.iam.gserviceaccount.com --staging-location "gs://*$bucket*" --max-workers=1 --worker-machine-type=e2-medium --project *$project*
```

<!---

-->
