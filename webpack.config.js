const path = require('path');

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
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
        ],
    },
};