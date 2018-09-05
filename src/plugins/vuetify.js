import Vue from "vue";
import Vuetify from "vuetify";
import colors from "vuetify/es5/util/colors";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify, {
  theme: {
    primary: colors.cyan.darken2,
    secondary: colors.grey.lighten2,
    accent: colors.cyan.accent1,
    error: colors.pink.accent2,
    info: colors.cyan.base,
    success: colors.green.base,
    warning: colors.orange.base
  }
});
