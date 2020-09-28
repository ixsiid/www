# Halzion.net

Gitコマンドで記事を投稿・編集するGithub上で動くWebアプリケーションです。

# 新しく記事を作成する

``` git
git checkout master
git checkout -b article/記事タイトル
git push -u origin article/記事タイトル
```

public/articleフォルダ内に記事を作成する。
ローカルサーバを立てて内容確認

``` bash
npm run serve
```

確認が完了したらビルドしてPush、Github上でマージしたら反映されます。

# 記事を作成・編集中に他の更新があったら

記事の作成を途中で止めて、別の記事をmasterにマージすると、作成中だった記事には当然反映されません。
なので、masterをリベースしましょう。

``` git
git checkout master
git pull
git checkout article/もともと編集だった記事
git rebase master
```

コンフリクトが発生すると大変なので、めんどくさがらずにやりましょう。

