const path = require('path')

module.exports = {
    mode: "development",

    entry: path.resolve(__dirname, './src/index.js'),

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]                
            },
            {
                test: /\.(s(a|c)ss)$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },

    devtool: false,

    devServer: {
        static: "./dist",
    },
};