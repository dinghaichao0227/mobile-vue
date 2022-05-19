const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
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
