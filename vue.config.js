/**
 * https://cli.vuejs.org/config/
 */
module.exports = {
  baseUrl:
    process.env.NODE_ENV === "production" ? "/production-sub-path/" : "/",
  /**
   * https://cli.vuejs.org/config/#devserver-proxy
   */
  devServer: {
    proxy: {
      "/cross-domin/baidu": {
        target: "http://suggestion.baidu.com",
        changeOrigin: true,
        /**
         * https://github.com/chimurai/http-proxy-middleware#proxycontext-config
         */
        pathRewrite: {
          "^/cross-domin/baidu": "/s" // http://localhost:8080/baidu/s?wd=vue => http://suggestion.baidu.com/s?wd=vue
        }
      },
      "/foo": {
        target: "<other_url>",
        ws: true
      }
    }
  }
};
