/* eslint-disable */
import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate"
// import * as Cookies from 'js-cookie'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: "http://ryugaku.myedu.jp/images/chn/sc/pekin.jpg",
        id: "dsfsadfdfwfew",
        title: "聚会在北京",
        date: new Date(),
        location: "北京",
        description: "聚会在北京聚会在北京!"
      },
      {
        imageUrl:
          "https://i.travelapi.com/hotels/1000000/500000/490600/490509/490509_186_z.jpg",
        id: "wefewfsfdsfdf",
        title: "聚会在上海",
        date: new Date(),
        location: "上海",
        description: "聚会在上海聚会在上海!"
      }
    ],
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
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
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
