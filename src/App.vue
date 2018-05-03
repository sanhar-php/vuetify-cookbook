<template>
  <v-app>
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <!-- 副标题 -->
        <v-layout row>
          <v-flex xs6>
            <v-subheader>
              <v-list-tile-action>
                <v-icon>android</v-icon>
              </v-list-tile-action>
              Name
            </v-subheader>
          </v-flex>
          <v-flex xs6 text-xs-center>
            <v-subheader>
              <a href="#">Change</a>
            </v-subheader>
          </v-flex>
        </v-layout>
        <!-- 子菜单 -->
        <v-list-group
          append-icon="keyboard_arrow_down"
          v-model="group"
        >
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Platform</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>mdi-apple</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>child-menu1</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>mdi-android</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>child-menu2</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>mdi-account-box</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Account</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="primary">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>Contact</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app color="secondary">
      <span class="primary--text flex text-xs-center">&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      group: true
    }
  }
}
</script>

<codepen-resources lang="json">
  {
    "js": ["https://use.fontawesome.com/releases/v5.0.11/js/all.js"]
  }
</codepen-resources>