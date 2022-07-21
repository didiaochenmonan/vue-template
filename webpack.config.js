const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    mode:"development",
    entry:path.resolve(__dirname,"./src/main.js"),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
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
    ],
    //这个属性解决在ie一直报语法错误的问题
    // 传递多个目标时使用共同的特性子集
    // webpack 将生成 web 平台的运行时代码，并且只使用 ES5 相关的特性。
    target: ['web', 'es5'],
}