const axios = require("axios")

if (process.env.NODE_ENV == "development") {
  var hostname = `http://localhost:3000`
} else {
  var hostname = ``
}

/**
 *
 * @param {*} url
 * @param {*} params
 * @param {String} method HTTP Method, get as default
 */
const use = (url, params, method = "get") =>
  axios({
    method: method,
    url: `${hostname}` + url,
    params: params
  })

const doGet = (url, params) => use(url, params)
const doDelete = (url, params) => use(url, params, "delete")

const doPost = (url, postData) =>
  axios({
    method: "post",
    url: `${hostname}` + url,
    data: postData,
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })

const doPut = (url, putData) =>
  axios({
    method: "put",
    url: `${hostname}` + url,
    data: putData,
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })

export default {
  doGet,
  doPost,
  doPut,
  doDelete
}
