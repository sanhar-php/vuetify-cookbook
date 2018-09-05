<template>
  <div>
    <v-container>
      <v-layout row>
        <v-flex xs4>
          <p>{{ user.email }}</p>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    computed: {
      user () {
        return this.$store.getters.user
      }
    }
  }
</script>