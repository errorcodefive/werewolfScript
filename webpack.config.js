var path = require('path');
var webpack = require('webpack');

module.exports={
    entry: './client/src/app.js',
    output: {
        path: path.resolve(__dirname, 'client', 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: {
            test: /\.js$/,
            exclude: 'node_modules',
            use: {
                loader: "babel-loader"
            }
        }
    }
}