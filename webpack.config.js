const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/script.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                  loader: 'file-loader',
                },
            }
        ]
    },
    plugins: [new HtmlWebPackPlugin({ template: "./src/index.html"})]
};