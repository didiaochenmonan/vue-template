const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const {DefinePlugin} = require('webpack')
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const { NODE_ENV } = process.env;
function resolve(dir) {
return path.join(__dirname, dir);
}
module.exports={
    mode:"development",
    devtool:"cheap-module-source-map",//开发
    // devtool: false,//生产
    entry:resolve("../src/main.js"),
    output:{
        path:resolve('../dist'),
        filename:'js/[name].js',
        chunkFilename: 'js/[name]-[chunkhash:6].js',
        clean:true
    },
    devServer:{
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port:'3000',
        open:true,
        hot:true,
        historyApiFallback: true,
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader:'babel-loader',
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  'postcss-loader'
                ]
              },
              {
                test:/\.less$/,
                use:[
                    'vue-style-loader',
                    'css-loader',
                    'less-loader',
                    'postcss-loader'
                ]
              },
              {
                test: /\.(jpg|jpeg|png|gif)$/,
                type: 'asset',
                exclude: /node_modules/,
                generator: { // 设置生成器
                    filename: 'img/[name]-[hash:6].[ext]' // 设置生成的文件名
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024
                    }
                }
            },
            {
                test: /\.(woff|woff2|svg|eot|ttf)$/,
                type: 'asset/resource',
                generator: { // 设置生成器
                    filename: 'fonts/[name][ext]' // 设置生成的文件名
                }
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'vue',
            template: resolve('../index.html'),
            filename: 'index.html',
            inject: 'body',
            path: resolve('../index.html'),
        }),
        new DefinePlugin({
            __VUE_OPTIONS_API__:true,
            __VUE_PROD_DEVTOOLS__:true
        }),
        new ESLintWebpackPlugin({
            context:resolve('../src'),
            exclude:'node_modules',
            // fix:true
        })
    ],
    //这个属性解决在ie一直报语法错误的问题
    // 传递多个目标时使用共同的特性子集
    // webpack 将生成 web 平台的运行时代码，并且只使用 ES5 相关的特性。
    target: ['web', 'es5'],
    resolve: {
        extensions: ['.js', '.json', '.css', '.less', '.vue'],
        alias: {
            '@': resolve('../src'),
            images: resolve( '../src/images')
        }
    },
    optimization:{
        splitChunks:{
            chunks: "all",
            cacheGroups: {
              libs: {
                name: "chunk-libs",
                test: /[\\/]node_modules[\\/]/,
                priority: 10,
                chunks: "initial",
              },
              commons: {
                name: "chunk-commons",
                test: resolve("../src/components"),
                minChunks: 3,
                priority: 5,
                reuseExistingChunk: true,
              },
            },
        },
        runtimeChunk: true
    }
}