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
        <template v-for="item in menuItems">
          <!-- 副标题 heading -->
          <v-layout
            row
            v-if="item.heading"
            :key="item.heading.id"
          >
            <!-- flex.subheader list-tile-action.icon=heading.icon/child.text -->
              <v-flex xs6>
                <v-subheader>
                  <v-list-tile-action>
                    <v-icon>{{item.heading.icon}}</v-icon>
                  </v-list-tile-action>
                  {{item.heading.text}}
                </v-subheader>
              </v-flex>
            <!-- flex.subheader a href="" -->
              <v-flex xs6 text-xs-center>
                <v-subheader>
                  <a href="#">Change</a>
                </v-subheader>
              </v-flex>
          </v-layout>
          <!-- 子菜单 item.children -->
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <!-- 分组标题list-tile content.tilte=item.text -->
              <v-list-tile slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title>Platform</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            <!-- 二级菜单list-tile action.icon=child.icon/content.title=child.text -->
              <v-list-tile
                v-for="(child, i) in item.children"
                :key="i"
              >
                <v-list-tile-action>
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ child.text }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
          </v-list-group>
          <!-- 一级菜单 list-tile action.icon=child.icon/content.title=child.text -->
            <v-list-tile
              v-else
              :key="item.text"
            >
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
// 副标题
let heading = { icon: "mdi-android", text: "Android Apps" };

export default {
  data () {
    return {
      drawer: true,
      // 菜单对象数组
      menuItems: [
        { heading: heading },
        // 二级菜单: 带children数组的
        {
          icon: "keyboard_arrow_up",
          "icon-alt": "keyboard_arrow_down",
          text: "Platform",
          model: true,
          children: [
            { icon: "mdi-android", text: "Android Apps" },
            { icon: "mdi-apple", text: "iOS Apps" }
          ]
        },
        // 一级菜单
        { icon: "mdi-account-box", text: "Account" },
        { icon: "help", text: "Help" }
      ]
    };
  }
};
</script>