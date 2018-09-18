/**
 * https://jestjs.io/docs/en/configuration.html
 */
const { defaults } = require("jest-config")
const { jest } = require("./package")
module.exports = {
  // "program": "/Users/liyan/.nvm/versions/node/v8.11.3/bin/jest",
  ...jest,
  transformIgnorePatterns: [
    "node_modules/(?!(babel-jest|jest-vue-preprocessor|sinon)/)"
  ],
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest"
  },
  verbose: true
}
// console.log(module.exports)
