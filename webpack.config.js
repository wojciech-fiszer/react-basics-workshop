var path = require('path')
var TextExtract = require('extract-text-webpack-plugin')
var HtmlPlugin = require('html-webpack-plugin')

module.exports = {
    entry: [
        './src/main.jsx'
    ],
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    devtool: 'sourcemap',
    plugins: [
        new TextExtract('styles.css'),
        new HtmlPlugin({ template: './src/index.html' })
    ],
    module: {
        rules: [
            { test: /\.jsx?$/, use: 'babel-loader' },
            { test: /\.css$/, use: TextExtract.extract('css-loader') },
            {
                test: /\.(png|svg|jpg|gif)$/, use: {
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[hash].[ext]'
                    }
                }
            },
        ]
    },
    devServer: {
        historyApiFallback: true
    }
}