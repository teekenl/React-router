module.exports = {
    entry: './app/main.js',
    output: {
        path: 'C:\\Users\\dknig\\Desktop\\Git\\React-router\\app',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './app',
        port: 8100
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};


