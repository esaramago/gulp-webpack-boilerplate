var path = require('path');

module.exports = {

    entry: {
        app: './src/js/app.js',
    },
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
        ],
    },
};