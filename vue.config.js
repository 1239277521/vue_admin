// Vue.config.js 配置选项

module.exports = {
    //  基本路径
    publicPath: "./",
    //  构建时的输出目录
    outputDir: "./dist",
    //  放置静态资源的目录
    assetsDir: "./static",
    //  html 的输出路径
    indexPath: "./index.html",
    //文件名哈希
    filenameHashing: true,
    //用于多页配置，默认是 undefined
    pages: {
        index: {
            entry: './src/main.js',
            template: './public/index.html',
            filename: './index.html',
            title: '后台管理',
        },
        subpage: 'src/main.js'

    },
    //  是否在保存的时候使用 `eslint-loader` 进行检查。
    lintOnSave: true,
    //  是否使用带有浏览器内编译器的完整构建版本
    runtimeCompiler: false,
    //  设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
    crossorigin: "",
    //  在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。
    integrity: false,
    css: {
        extract: true,
        sourceMap: false,
        loaderOptions: {
            sass: {
                data:`@import "./src/style/bodystyle.scss";`
                // 这里的选项会传递给 css-loader

            },
        },
        modules: false
    },
    parallel: require('os').cpus().length > 1,
    pwa: {},
    pluginOptions: {}

}