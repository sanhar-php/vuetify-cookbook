import Vue from "vue"
import Vuex from "vuex"
import {mutations} from "./mutations"
// import actions from './actions'
// import plugins from './plugins'
import oauth2 from "./modules/oauth2"
import products from "./modules/products"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    error: null
  },
  // actions,
  mutations,
  // plugins,
  modules: {
    oauth2,
    products
  }
})
