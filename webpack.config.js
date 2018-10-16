// You

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Entry: Where you want the file to start transpiling.
// Output where you want the transpiled stuff to go.
// Imported components meaning the entire react structure will come along with the index.js entry file.
// the filename is what the transpiled file should be named.
// The test is looking for anything that is a js file
// The index.html file is the template within source.
module.export = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js(x)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}