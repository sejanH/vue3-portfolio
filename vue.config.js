module.exports = {
  lintOnSave: false,
  pages: {
    index: {
      entry: "src/main.js",
      title: "DreisSpace"
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "@/assets/scss/core";
          `
      }
    }
  }
};