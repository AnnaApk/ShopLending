const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: { 
    main: './src/index.js',
    catalog: './src/catalog.js',
    productCard: './src/product-card.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // publicPath: ''
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
    compress: true, // это ускорит загрузку в режиме разработки
    port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
    open: true // сайт будет открываться сам при запуске npm run dev
  },
  module: {
    rules: [
      { // правило для обработки файлов
        // регулярное выражение, которое ищет все файлы с такими расширениями
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource'  //  свойство которое говорит копировать файлы в папку dist с исходным расширением
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/catalog.html',
      filename: 'catalog.html',
      // inject: true, 
    }),
    new HtmlWebpackPlugin({
      template: './src/product-card.html',
      filename: 'product-card.html',
      // inject: true, 
    }),
    new HtmlWebpackPlugin({
      template: './src/not-found.html',
      filename: 'not-found.html',
      // inject: true, 
    }),
    new CleanWebpackPlugin(),  //  плагин для очистки папки dist перед новой сборкой
    new MiniCssExtractPlugin()
  ]  
 }
