const { defineConfig } = require('@vue/cli-service');

module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081', 
        changeOrigin: true
      }
    }
  }
};
