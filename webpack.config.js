const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: devMode ? 'development' : 'production',
    context: path.join(__dirname, 'app/'),
    entry: {
        app: './js/app.js',
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: (!devMode ? '[name].[chunkhash:8].js' : '[name].bundle.js'),
        chunkFilename: (!devMode ? '[name].[chunkhash:8].chunk.js' : '[name].chunk.js'),
        globalObject: 'this',
    },
    devtool: devMode ? 'cheap-module-eval-source-map' : 'none',
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                            hmr: devMode,
                        },
                    },
                    'css-loader',
                    'postcss-loader'
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'views/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),

    ]
}