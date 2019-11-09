// 初始webpack配置
const path=require('path');
const HtmlPlugin=require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//启用每次打包都生成新的dist目录，覆盖旧的dist目录
module.exports={
    mode:'development',
    target:"node",
    entry:{
        app:path.join(__dirname,"../server/app.js"),
    },
    output:{
        path:path.join(__dirname,'../dist'),
        filename:'serverBundle.js',
        publicPath:"/public",
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
          {
            test: /.js$/,
            loader: 'babel-loader',
            exclude: path.join(__dirname, '../node_modules')
          }
        ]
      }
}