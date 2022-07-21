const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    mode:"development",
    entry:path.resolve(__dirname,"./src/main.js"),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    devServer:{
        port:'3000',
        open:true,
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader:'babel-loader',
                
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'vue',
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html',
            inject: 'body',
            path: path.resolve(__dirname, './index.html'),
        }),
    ]
}