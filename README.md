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

# 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
