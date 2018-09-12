const axios = require("axios")

if (process.env.NODE_ENV == "development") {
  var hostname = ``
} else {
  var hostname = ``
}

/**
 *
 * @param {*} url
 * @param {*} params
 * @param {String} method HTTP Method, get as default
 */
export const use = (url, params, method = "get") =>
  axios({
    method: method,
    url: `${hostname}` + url,
    params: params
  })

export const doGet = (url, getData) => use(url, getData)

export const doPost = (url, postData) =>
  axios({
    method: "post",
    url: `${hostname}` + url,
    data: postData,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    }
  })

export const doPut = (url, putData) => use(url, putData, "put")

export const doDelete = (url, getData) => use(url, getData, "delete")
