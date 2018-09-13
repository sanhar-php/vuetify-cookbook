import axios from "../../utils/axios-helper"

// initial state
const state = {
  all: []
}

// getters
const getters = {}

// actions
const actions = {
  getAllProducts({ commit }) {
    commit("setLoading", true, { root: true })
    commit("setError", null, { root: true })
    axios
      .doGet("/products")
      .then(response => {
        console.log("getAllProducts()", response.data[0])
        commit("setProducts", response.data)
      })
      .catch(error => commit("setError", error.message, { root: true }))
    commit("setLoading", false, { root: true })
  }
}

// mutations
const mutations = {
  setProducts(state, products) {
    state.all = products
  },

  decrementProductInventory(state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
