<template>
  <v-app>
    <v-navigation-drawer
      dark
      floating
      :clipped="$vuetify.breakpoint.lgAndUp"
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
    <v-toolbar
      color="primary"
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Backend Console</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
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
      group: true,
      // 菜单对象()数组
      menuItems: []
    };
  }
};
</script>