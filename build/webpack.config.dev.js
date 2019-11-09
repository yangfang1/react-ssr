// 初始webpack配置
const path=require('path');
const HtmlPlugin=require('html-webpack-plugin');
module.exports={
    mode:'development',
    entry:{
        app:path.join(__dirname,"../client/index.js"),
    },
    output:{
        path:path.join(__dirname,'../dist'),
        filename:'app.[hash].js',
        publicPath:"/public"
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
        new HtmlPlugin()
    ]
}