<<<<<<< HEAD
//  node的路径模块
var path = require('path')
//  我们是webpack当然要引入这个
var webpack = require('webpack')
//  这个是构建页面资源的插件
// var ExtractTextPlugin = require('extract-text-webpack-plugin')
//  因为我们是vue.js的应用，把各个组件当做一个页面.vue后缀，所以引入这个可以编译這些文件
// var vue = require("vue-loader")

module.exports = {
=======
const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? '' : 'inline-source-map',
  devServer: { // 检测代码变化并自动重新编译并自动刷新浏览器
    contentBase: path.resolve(__dirname, 'dist'), // 设置静态资源的根目录
    hot: true,
  },
>>>>>>> master
  entry: {
    module: './src/exportModule.js',
    build: './src/main.js'
  },
  output: {
<<<<<<< HEAD
    path: './dist/',
    filename: '[name].js',
    library: 'vue-concise-slider',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: [ '', '.js', '.vue' ]
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: path.resolve(__dirname, './'),
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: path.resolve(__dirname, './'),
        exclude: /node_modules/
      }
    ],
    // 加载器
    loaders: [
      // 解析.vue文件
      { test: /\.vue$/, loader: 'vue' },
      // 转化ES6的语法
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      // 编译css并自动添加css前缀
      { test: /\.css$/, loader: 'style!css!autoprefixer' },
      // .scss 文件想要编译，scss就需要这些东西！来编译处理
      // install css-loader style-loader sass-loader node-sass --save-dev
      { test: /\.scss$/, loader: 'style!css!sass?sourceMap' },
      // 图片转化，小于8K自动转化为base64的编码
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192' },
=======
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.scss']
  },
  externals: {
    vue: 'Vue'
  },
  module: {
    // 加载器
    rules: [
      // 解析.vue文件
      {
        test: /.vue$/,
        loader: 'vue-loader'
      },
      // 转化ES6的语法
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // 编译css并自动添加css前缀
      {
        test: /\.css$/,
        use: [ // 应用于模块的 loader 使用列表
          'style-loader',
          'css-loader'
        ]
      },
      // .scss 文件想要编译，scss就需要这些东西！来编译处理
      // install css-loader style-loader sass-loader node-sass --save-dev
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'scss-loader'
        ]
      },
      // 图片转化，小于8K自动转化为base64的编码
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'image/png',
              name: 'img/[hash].[ext]'
            }
          }
        ]
      },
>>>>>>> master
      // html模板编译
      { test: /\.(html|tpl)$/, loader: 'html-loader' }
    ]
  },
<<<<<<< HEAD
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      mangle: true,
      compress: {
        warnings: false
      }
    })
=======
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    new BundleAnalyzerPlugin(),
    new webpack.HotModuleReplacementPlugin()
>>>>>>> master
  ]
}
