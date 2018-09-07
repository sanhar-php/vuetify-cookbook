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
    removeUser(state, payload) {
      state.users = state.users.filter(user => user.id !== payload.id)
    }
  },
  actions: {
    // API in Actions
    fetchUsersData({ commit }, getter) {
      commit("setLoading", true)
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          // console.log(response.data)
          commit("setUsers", response.data)
        })
        .catch(error => commit("setError", error.message))
      commit("setLoading", false)
    },
    deleteUser({ commit }, payload) {
      console.log('payload.id =',payload.id)
      commit("setLoading", true)
      axios
        .delete(`https://jsonplaceholder.typicode.com/users/${payload.id}`)
        .then(() => {
          console.log('axios.delete users =', payload.id)
          commit("removeUser", {id: payload.id})
        })
        .catch(error => {
          console.log(error)
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
      // return state.loadedMeetups.sort((meetupA, meetupB) => {
      //   return meetupA.date > meetupB.date
      // })
      return state.users
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup(state) {
      return meetupId => {
        return state.loadedMeetups.find(meetup => {
          return meetup.id === meetupId
        })
      }
    },
    user(state) {
      return state.user
    },
    loading(state) {
      return state.loading
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
