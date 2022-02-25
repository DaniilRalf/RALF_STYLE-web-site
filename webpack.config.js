const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
          {
            test: /\.css$/,
            use: [MiniCSSExtractPlugin.loader, "css-loader"],
          },
        ]
    },


    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCSSExtractPlugin({
            filename: "main.css",
        }),
        new CleanWebpackPlugin({
            path:'./dist/*.*'  //not important
        }),
        new  CopyWebPackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/img'),
                    to: path.resolve(__dirname, 'dist/img'),
                }
            ]
        }),
    ],
};