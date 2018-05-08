// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router.js'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VCard,
  VDataTable,
  VIcon,
  VGrid,
  VPagination,
  VSubheader,
  VTextField,
  VToolbar,
  VToolTip,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VCard,
    VDataTable,
    VIcon,
    VGrid,
    VPagination,
    VSubheader,
    VTextField,
    VToolbar,
    VToolTip,
    transitions
  },
  theme: {
    primary: colors.blue.darken2,
    secondary: colors.grey.lighten2,
    accent: colors.blue.lighten2,
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
