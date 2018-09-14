import axios from "../../utils/axios-helper"

// initial state
const state = {
  all: [],
  uri: '/products'
}

// getters
const getters = {
  loadedProducts(state) {
    return state.all
  },

  /**
   * get product by id
   *
   * @param {*} state
   */
  loadedProduct(state) {
    return id => {
      return state.all.find(product => {
        return product.id === id
      })
    }
  }
}

// actions
const actions = {
  getAll({ commit }) {
    commit("setLoading", true, { root: true })
    commit("setError", null, { root: true })
    axios
      .doGet(`${state.uri}`)
      .then(response => {
        // console.log("products/getAll()", response.data[0])
        commit("setAll", response.data)
      })
      .catch(error => commit("setError", error.message, { root: true }))
    commit("setLoading", false, { root: true })
  },
  create({ commit }, payload) {
    commit("setLoading", true, { root: true })
    commit("setError", null, { root: true })
    axios
      .doPost(`${state.uri}`, payload)
      .then(response => {
        console.log("axios.post product ...", response.data)
        payload.id = response.data.id
        commit("create", payload)
      })
      .catch(error => {
        console.log("axios.post error", error)
        commit("setError", error.message, { root: true })
      })
      commit("setLoading", false, { root: true })
  },
  update({ commit }, payload) {
    commit("setLoading", true, { root: true })
    commit("setError", null, { root: true })
    axios
      .doPut(`${state.uri}/${payload.id}`, payload)
      .then(() => {
        console.log("axios.put product", payload.id)
        commit("update", payload)
      })
      .catch(error => {
        console.log("axios.put error", error)
        commit("setError", error.message, { root: true })
      })
      commit("setLoading", false, { root: true })
  },
  delete({ commit }, payload) {
    commit("setLoading", true, { root: true })
    commit("setError", null, { root: true })
    axios
      .doDelete(`${state.uri}/${payload.id}`)
      .then(() => {
        console.log("axios.delete product", payload.id)
        commit("delete", { id: payload.id })
      })
      .catch(error => {
        console.log("axios.delete error", error)
        commit("setError", error.message, { root: true })
      })
    commit("setLoading", false)
}
}

// mutations
const mutations = {
  setAll(state, products) {
    state.all = products
  },

  create(state, payload) {
    state.all.push(payload)
  },
  update(state, payload) {
    state.all = state.all.map(data => {
      if (data.id === payload.id) {
        return payload
      } else {
        return data
      }
    })
  },
  delete(state, payload) {
    state.all = state.all.filter(data => data.id !== payload.id)
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
