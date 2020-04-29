# Static Website Boilerplate

静的な Web サイト制作のための boilerplate
Webpack + Babel + ESLint + Pug + Sass + imagemin

dist/に image/, index.html, main.css, main.js を出力

## コマンド

### install

`npm i`

### build

`npm run build`

dist ディレクトリ以下に build ファイルを出力

### start

`npm run start`

開発用ローカルサーバーを立ち上げる

さらに、src/assets/images/以下の変更を検知して画像の圧縮、dist/images/以下への出力を実行する

### imagemin

`npm run imagemin`

src/assets/images/以下の画像を圧縮しつつ、dist/images/以下へ出力。
圧縮度の変更は script/imagemin.js を参照

## 注意点

webpack での画像のバンドルはせず、すべて分離する。なので html、scss 内の画像パスは dist 配下を参照
`./images/**`
