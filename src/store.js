/* eslint-disable */
import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import createPersistedState from "vuex-persistedstate"
// import * as Cookies from 'js-cookie'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null,
    loading: false,
    error: null,
    users: []
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
    },
    setUsers(state, payload) {
      state.users = payload
    },
    createUser(state, payload) {
      state.users.push(payload)
    },
    updateUser(state, payload) {
      state.users = state.users.map(user => {
        if (user.id === payload.id) {
          return payload
        } else {
          return user
        }
      })
    },
    removeUser(state, payload) {
      state.users = state.users.filter(user => user.id !== payload.id)
    }
  },
  actions: {
    // API in Actions
    fetchUsersData({ commit }, getter) {
      commit("setLoading", true)
      commit("clearError")
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          // console.log("fetchUsersData, company = ", response.data[0].company.name)
          commit("setUsers", response.data)
        })
        .catch(error => commit("setError", error.message))
      commit("setLoading", false)
    },
    createUser({ commit }, payload) {
      commit("setLoading", true)
      axios
        .post("https://jsonplaceholder.typicode.com/users/")
        .then(response => {
          console.log("axios.post user ...", response.data)
          payload.id = response.data.id
          commit("createUser", payload)
        })
        .catch(error => {
          console.log("axios.post error", error)
          commit("setError", error.message)
        })
      commit("setLoading", false)
    },
    updateUser({ commit }, payload) {
      commit("setLoading", true)
      axios
        .put(`https://jsonplaceholder.typicode.com/users/${payload.id}`)
        .then(() => {
          console.log("axios.put user =", payload.id)
          commit("updateUser", payload)
        })
        .catch(error => {
          console.log("axios.put error", error)
          commit("setError", error.message)
        })
      commit("setLoading", false)
    },
    deleteUser({ commit }, payload) {
      // console.log('payload.id =',payload.id)
      commit("setLoading", true)
      axios
        .delete(`https://jsonplaceholder.typicode.com/users/${payload.id}`)
        .then(() => {
          console.log("axios.delete users =", payload.id)
          commit("removeUser", { id: payload.id })
        })
        .catch(error => {
          console.log("axios.delete error", error)
          commit("setError", error.message)
        })
      commit("setLoading", false)
    },
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
    loadedUsers(state) {
      return state.users
    },
    loadedUser(state) {
      return id => {
        return state.users.find(user => {
          return user.id === id
        })
      }
    },
    user(state) {
      return state.user
    },
    loading(state) {
      return state.loading
    },
    error(state) {
      return state.error
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
