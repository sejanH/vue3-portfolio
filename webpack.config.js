const path = require("path");
module.exports = {
    module: {
        rules: [{ test: /\.txt$/, use: 'raw-loader' }],
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