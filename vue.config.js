const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      // 配置 jQuery 插件的参数

      new webpack.ProvidePlugin({
        $: 'jquery',

        jQuery: 'jquery',

        'window.jQuery': 'jquery',

        // Popper: ["popper.js", "default"],
      }),
    ],
  },
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         require('postcss-plugin-px2rem')({
  //           rootValue: 37.5,
  //           exclude: /(node_module)/,
  //           mediaQuery: false,
  //           minPixelValue: 3,
  //         }),
  //       ],
  //     },
  //   },
  // },
});
