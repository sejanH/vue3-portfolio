const path = require("path");
module.exports = {
    module: {
        rules: [
            {
                test: /\.txt$/, use: 'raw-loader'
            },
            {
                test: /\.(png|jpg|gif|jpeg|ico)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ],
    },
    modules: [
        path.resolve('node_modules')
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
}