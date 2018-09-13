import axios from '../../utils/axios-helper'

// initial state
const state = {
  user: null
}

// getters
const getters = {
  user(state) {
    return state.user
  }
}

// actions
const actions = {
  signUserIn({ commit }, payload) {
    commit("setLoading", true)
    commit("clearError")
    // call server signIn method
    // . then ( user ==> user.id...
    const newUser = {
      id: "23r4few",
      email: payload.email,
      password: payload.password,
      registeredMeetups: []
    }
    commit("setUser", newUser)
  },
  autoSignIn({ commit }, payload) {
    commit("setUser", { id: payload.uid, registeredMeetups: [] })
  },
  logout({ commit }) {
    // signout from server
    commit("setUser", null)
  }
}

// mutations
const mutations = {
  setUser(state, payload) {
    state.user = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}