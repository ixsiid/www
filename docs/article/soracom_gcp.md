<!---
 Title: SORACOM InventoryからGoogle Cloud Platform上のBigQueryにデータを格納する
 Tags: IoT
 Date: 2020-07-10
-->

# SORACOM InventoryからGoogle Cloud Platform上のBigQueryにデータを格納する

## 概要

WiFi or 無線網を使って、SORACOM経由でGCP上にデータを格納する

## アーキテクチャ

### 注意

Dataflowをストリーミングモードで常時起動する想定です。最低でも \1111/month 程度の請求がかかります

## 準備


### APIの有効化

1. Cloud PubSub
1. Dataflow
1. BigQuery

### ユーザー

次のユーザーを作成

1. *Manager* アーキテクチャを構成する人

### サービスアカウント[^1]

[^1]: GCPのシステム上で、ユーザー（人）に結びつかずに各コマンドを実行するためのアカウント

次のアカウントを作成

1. PubSubパブリッシャー

また次のアカウントが自動で作成される

1. aaa
1. bbb
1. ccc


### 


## 手順

### PubSubの構成

### SORACOM Funnelにパブリッシャーを登録

### BigQueryテーブルスキームを作成

Invoke UDF

### Dataflowを構成


## 動作確認



