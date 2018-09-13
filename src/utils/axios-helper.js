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

const doGet = (url, getData) => use(url, getData)

const doPost = (url, postData) =>
  axios({
    method: "post",
    url: `${hostname}` + url,
    data: postData,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    }
  })

const doPut = (url, putData) => use(url, putData, "put")

const doDelete = (url, getData) => use(url, getData, "delete")


export default {
  doGet,
  doPost,
  doPut,
  doDelete
}