<template>
  <v-app>
    <!-- left navi-bar begin -->
    <v-navigation-drawer dark floating :clipped="$vuetify.breakpoint.lgAndUp" v-model="sideNav" app>
      <v-list dense>
        <template v-for="item in menuItems">
          <!-- 副标题 heading -->
          <v-layout row v-if="item.heading" :key="item.heading.id">
            <!-- flex.subheader list-tile-action.icon=heading.icon/child.text -->
            <v-flex xs8>
              <v-subheader>
                <v-list-tile-action>
                  <v-icon>{{item.heading.icon}}</v-icon>
                </v-list-tile-action>
                {{item.heading.text}}
              </v-subheader>
            </v-flex>
          </v-layout>

          <!-- 子菜单 item.children -->
          <v-list-group v-else-if="item.children" :key="item.text" v-model="item.model" :prepend-icon="item.model ? item.icon : item['icon-alt']" append-icon="">
            <!-- 分组标题list-tile content.tilte=item.text -->
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <!-- 二级菜单list-tile action.icon=child.icon/content.title=child.text -->
            <v-list-tile v-for="(child, i) in item.children" :key="i" :to="child.link">
              <v-list-tile-action>
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ child.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <!-- 一级菜单 list-tile action.icon=child.icon/content.title=child.text -->
          <v-list-tile v-else :key="item.text" :to="item.link">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <!-- left navi-bar end -->

    <!-- my-toolbar begin -->
    <v-toolbar color="primary" :clipped-left="$vuetify.breakpoint.lgAndUp" app>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Backend Console</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <template v-if="userIsAuthenticated">
          <v-btn flat to="/profile">
            <v-icon left dark>person</v-icon>
            Profile
          </v-btn>
          <v-btn flat @click="onLogout">
            <v-icon left dark>exit_to_app</v-icon>
            Logout
          </v-btn>
        </template>
        <template v-else>
          <v-btn flat to="/signup">
            <v-icon left dark>face</v-icon>
            Sign up
          </v-btn>
          <v-btn flat to="/signin">
            <v-icon left dark>lock_open</v-icon>
            Sign in
          </v-btn>
        </template>
      </v-toolbar-items>
    </v-toolbar>
    <!-- my-toolbar end -->

    <!-- main content here-->
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <!-- footer here -->
    <v-footer app color="secondary">
      <span class="primary--text flex text-xs-center">&copy;
        <strong>Copyright</strong> 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
// 副标题
let heading = { icon: "mdi-android", text: "Android Apps" };

export default {
  data () {
    return {
      sideNav: false
    };
  },
  computed: {
    menuItems () {
      // 菜单对象数组
      let menuItems = [
        { heading: heading },
        // 二级菜单: 带children数组的
        {
          icon: "keyboard_arrow_up",
          "icon-alt": "keyboard_arrow_down",
          text: "Platform",
          model: false,
          children: [
            { icon: "mdi-android", text: "Android Apps", link: "" },
            { icon: "mdi-apple", text: "iOS Apps", link: "" }
          ]
        },
        // 二级菜单: 带children数组的
        {
          icon: "keyboard_arrow_up",
          "icon-alt": "keyboard_arrow_down",
          text: "UI Components",
          model: true,
          children: [
            { icon: "mdi-database", text: "Data Table", link: "/table" }
          ]
        },
        // 二级菜单: 带children数组的
        {
          icon: "keyboard_arrow_up",
          "icon-alt": "keyboard_arrow_down",
          text: "Other Samples",
          model: true,
          children: [{ icon: "mdi-web", text: "Cross Domain", link: "/baidu" }]
        },
        { icon: "face", text: "Sign up", link: "/signup" },
        { icon: "lock_open", text: "Sign in", link: "/signin" },
        { icon: "help", text: "Help", link: "" }
      ];
      if (this.userIsAuthenticated) {
        menuItems = [
          ...menuItems,
          {
            icon: "supervisor_account",
            text: "Users",
            link: "/users"
          },
          { icon: "mdi-account-box", text: "Profile", link: "/profile" }
        ];
      }
      return menuItems;
    },
    userIsAuthenticated () {
      // console.log('oauth2', this.$store.getters["oauth2/user"])
      return (
        this.$store.getters["oauth2/user"] !== null &&
        this.$store.getters["oauth2/user"] !== undefined
      );
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch("oauth2/logout");
    }
  }
};
</script>