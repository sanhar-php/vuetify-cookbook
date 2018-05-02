<template>
  <v-app>
  <v-navigation-drawer app></v-navigation-drawer>
  <v-toolbar app color="primary"></v-toolbar>
  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
  <v-footer app color="accent"></v-footer>
</v-app>
</template>

