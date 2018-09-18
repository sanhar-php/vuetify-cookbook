const debug = require("debug")("unit:vuex:products")
debug.enabled = true

import { mount } from "@vue/test-utils"
import products from "@/store/modules/products"

const sinon = require("sinon")

describe("Test Vuex Module: product", () => {
  beforeAll(() => {
    process.env.NODE_ENV = "development"
  })
  describe("mutations", () => {
    test("create", () => {
      // mock state
      const state = {
        all: [],
        uri: "/products"
      }
      let create = products.mutations.create
      // apply mutation
      create(state, {
        id: 1,
        title: "iPad 4 Mini",
        price: 500.01,
        inventory: 2
      })
      // assert result
      expect(state.all.length).toBe(1)
    })
  })

  //TODO 模拟actions的方法, 需要再读读相关文档
  describe("actions", () => {
    // mock state
    const state = {
      all: [],
      uri: "/products"
    }
    test("getAll", () => {
      const commit = sinon.spy()
      products.actions.getAll({ commit, state })
      debug("args=%O", commit.args)
    })
  })

  describe("getters", () => {
    // mock state
    const state = {
      all: [
        { id: 1, title: "Orange", category: "fruit" },
        { id: 2, title: "Apple", category: "fruit" },
        { id: 3, title: "Carrot", category: "vegetable" }
      ]
    }
    test("loadedProduct", () => {
      let product = products.getters.loadedProduct(state)(2)
      debug("product=%O", product)
      expect(product).toEqual({ id: 2, title: "Apple", category: "fruit" })
    })
  })
})
