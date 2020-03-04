# Static Website Boilerplate
静的なWebサイト制作のためのboilerplate
Webpack + Babel + Sass

dist/main.jsにjs, sass, sass内のurl(100KB以下)をまとめて出力

## コマンド
### install
``npm i``

### build
`` npm run build ``

distディレクトリ以下にbuildファイルを出力

### start
`` npm run start ``

開発用ローカルサーバーを立ち上げる

さらに、src/assets/images/以下の変更を検知して画像の圧縮、dist/images/以下への出力を実行する

### imagemin

`` npm run imagemin``

src/assets/images/以下の画像を圧縮しつつ、dist/images/以下へ出力。
圧縮度の変更はscript/imagemin.jsを参照

## 注意点
webpackでの画像のバンドルはせず、すべて分離する。なのでhtml、scss内の画像パスはdist配下を参照
`` ./images/**``
