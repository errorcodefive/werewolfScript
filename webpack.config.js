var path = require('path');
var webpack = require('webpack');
var HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports={
    entry: './client/src/Main.jsx',
    output:{
        path: path.resolve(__dirname,'client','dist')
    },
    module:{
        rules:[
            {
                test:/\.jsx$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            },
            {
                test:/\.html$/,
                use:{
                    loader: 'html-loader'
                }
            },
            {
                test:/\.(s*)css$/,
                use:[
                    'style-loader', 
                    'css-loader', 
                    'sass-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: "./client/src/index.html",
            filename: "./index.html"
        })
    ],
    devServer:{
        proxy:{
            '/api':'http://localhost:3000'
        }
    }

}