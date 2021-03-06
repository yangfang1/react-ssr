// 初始webpack配置
const path=require('path');
const HtmlPlugin=require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//启用每次打包都生成新的dist目录，覆盖旧的dist目录
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpack = require('webpack');
const config={
  mode:'development',
  entry:{
      app:path.join(__dirname,"../client/index.js"),
  },
  resolve: {
    alias: {
        'react-dom': '@hot-loader/react-dom'
    }
  },
  output:{
      path:path.join(__dirname,'../dist'),
      filename:'app.[hash].js',
      publicPath:"/public/",
  },
  module: {
      rules: [
        {
          test: /.js$/,
          loader: 'babel-loader',
          exclude: path.join(__dirname, '../node_modules')
        }
      ]
    },
  plugins:[
      new HtmlPlugin({
        template:path.join(__dirname,'../client/index.html')
      }),
      new CleanWebpackPlugin(),
      new webpack.NamedModulesPlugin(),//展示热更替的名称
      new webpack.HotModuleReplacementPlugin(),
      // new BundleAnalyzerPlugin()//bundle分析
  ],
}
config.devServer={
  host:'0.0.0.0',
  port:'3333',
  hot:true,
  contentBase: path.join(__dirname,'../dist'),
  publicPath:'/public/',
  historyApiFallback: {
    index: '/public/index.html'
  },
}
module.exports=config