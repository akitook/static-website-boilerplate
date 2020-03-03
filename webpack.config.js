// 本番環境ではproduction, 開発環境ではdevelopmentに
const MODE = "development"

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";

module.exports = {
  mode: MODE,
  entry: `./src/index.js`,
  output: {
    // 出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: "main.js"
  },
  devServer: {
    contentBase: "dist",
    open: true
  },
  module: {
    rules: [
      //jsファイルの読み込みとトランスパイル
      {
        test: /\.js$/,
        use: [
          // babelでECMAScript5に変換
          {
            loader: 'babel-loader',
            options: {
              presets: [
                // プリセットを指定してES2020をES5に変換
                '@babel/preset-env'
              ]
            }
          }
        ]
      },
      // Sassファイルの読み込みとコンパイル
      {
        test: /\.scss/, //.scssの拡張子を持つファイルを対象
        // use配列で指定したLoaderたちが下から順番に適用。 sass-loader > css-loader > style-loader
        use: [
          // linkタグにCSSを出力する機能
          "style-loader",
          // CSSをJSにバンドルするための機能
          {
            loader: "css-loader",
            options: {
              // CSS内のurl()メソッドの取り込みを取り込む
              url: true,
              // ソースマップの利用有無
              sourceMap: enabledSourceMap,

              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2
            }
          },
          // PostCSSのための設定
          {
            loader: "postcss-loader",
            options: {
              sourceMap: enabledSourceMap,
              plugins: [
                // autoprefixerを使ってベンダープレフィックスを自動付与する
                require("autoprefixer")({
                  grid: true
                })
              ]
            }
          },
          // SASSをCSSに変換する機能
          {
            loader: "sass-loader",
            options: {
              sourceMap: enabledSourceMap
            }
          }
        ]
      },
      // scssファイル内でurl()
      {
        // 対象となるファイルの拡張子
        test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
        use: [
          {
            // 画像をBase64として取り込む
            loader: "url-loader",
            options: {
              limit: 100 * 1024, // 100KB以上であれば埋め込まずにファイルとして分離する
              name: './img/[name].[ext]'
            }
          }
        ]

      }
    ]
  },
}
