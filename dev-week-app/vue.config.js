module.exports = {
    publicPath: './',
    css: {
        extract: false
    },
    chainWebpack: config => {
      const svgRule = config.module.rule('svg')
      svgRule.uses.clear();
      svgRule
      .use('svg-url-loader')
      .loader('svg-url-loader');
    },
    configureWebpack: {
      optimization: {
        splitChunks: false
      }
    },
    productionSourceMap: false
}
