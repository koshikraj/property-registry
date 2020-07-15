
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: './src/js/app.js',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    plugins: [
        // Copy our app's index.html to the build folder.
        new CopyWebpackPlugin([
            { from: './src/index.html', to: "index.html" },
            { from: './src/property.html', to: "property.html" },
            { from: './src/user.html', to: "user.html" },
            { from: './src/js/bootstrap.min.js', to: "bootstrap.min.js" },
            { from: './src/js/truffle-contract.js', to: "truffle-contract.js" },
            { from: './src/js/web3.min.js', to: "web3.min.js" },
        ])
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ],
        loaders: [
            { test: /\.json$/, use: 'json-loader' },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    },

    devServer: {
        compress: true,
        disableHostCheck: true
    }
}
