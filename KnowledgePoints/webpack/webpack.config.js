const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const entry = require("./entry_webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
    mode: "development",
    entry,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: "../"

    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: { importLoaders: 1 }
                        },
                        'postcss-loader'
                    ]
                })
            }, {
                test: /\.(png|gif|jpg)/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 500,
                        outputPath: 'images/'
                    }
                }]
            },
            {
                test: /\.(htm|html)$/i,
                loader: ["html-withimg-loader"]
            },
            {
                test: /\.(scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    },
                ],
                exclude:/node_modules/
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            template: './src/index.html'
        }),
        new ExtractTextPlugin("css/index.css"),
        new CopyWebpackPlugin([{
            from:__dirname+"/src/public",
            to:"./public"
        }])
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: 'localhost'
    }
}