const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    publicPath: './',
    configureWebpack: {
        // 打包时，去掉指定引用的包
        externals: {
            // '引入的包名':'全局变量名'
            'vue': 'Vue',
            'vuex': 'Vuex',
            'vue-router': 'VueRouter',
            'axios': 'axios',
            'element-ui': 'ELEMENT'
        },
        plugins: [
            new BundleAnalyzerPlugin()
          ]
    }
}