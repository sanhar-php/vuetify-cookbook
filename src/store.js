/* eslint-disable */
import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from 'vuex-persistedstate'
// import * as Cookies from 'js-cookie'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    /**
     * save user to cache
     * @param {*} state
     * @param {*} payload
     */
    setUser(state, payload) {
      state.user = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    clearError(state) {
      state.error = null
    }
  },
  actions: {
    signUserUp({ commit }, payload) {
      commit("setLoading", true)
      commit("clearError")
      // call server create user method
      // . then ( user ==> user.id...
      const newUser = {
        id: "23r4few",
        email: payload.email,
        password: payload.password,
        registeredMeetups: []
      }
      commit("setUser", newUser)
    },
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
    fetchUserData({ commit }, getter) {
      commit("setLoading", true)
      //TODO get user info from DB
      commit("setLoading", false)
    },
    logout({ commit }) {
      // signout from server
      commit("setUser", null)
    },
    clearError({ commit }) {
      commit("clearError")
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  },
  plugins: [
    // createPersistedState({
    //   storage: {
    //     getItem: key => Cookies.get(key),
    //     // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
    //     setItem: (key, value) => Cookies.set(key, value, { expires: 1, secure: true }),
    //     removeItem: key => Cookies.remove(key)
    //   }
    // })
    createPersistedState()
  ]
})
