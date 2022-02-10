module.exports = {
  outputDir: "example/dist",
  chainWebpack(config) {
    config.module
      .rule("markdown")
      .test(/\.md$/)
      .use("markdown-loader")
      .loader(require.resolve("./example/markdown-loader"));
  },
};
