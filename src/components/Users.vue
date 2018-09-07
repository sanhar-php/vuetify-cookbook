<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 lg10>
        <h3 class="primary--text text-xs-center">User List</h3>
        <!-- https://vuetifyjs.com/zh-Hans/components/data-tables -->
        <v-data-table v-model="selected" :headers="headers" :items="meetups" hide-actions :pagination.sync="pagination" select-all item-key="title" class="text-xs-center">
          <!-- table-headers -->
          <template slot="headers" slot-scope="props">
            <tr>
              <th>
                <v-checkbox :input-value="props.all" :indeterminate="props.indeterminate" primary hide-details @click.native="toggleAll"></v-checkbox>
              </th>
              <th v-for="header in props.headers" :key="header.text" :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']" @click="changeSort(header.value)">
                <v-icon small>arrow_upward</v-icon>
                {{ header.text }}
              </th>
              <th>操作</th>
            </tr>
          </template>
          <!-- table-datas -->
          <template slot="items" slot-scope="props">
            <tr :active="props.selected" @click="props.selected = !props.selected">
              <td>
                <v-checkbox :input-value="props.selected" primary hide-details></v-checkbox>
              </td>
              <td v-for="header in headers" :key="header.id">{{ props.item[header.value]}}</td>
              <td>
                <v-card-actions>
                  <v-btn outline fab dark small color="cyan" :to="'/edit/'+props.item.id">
                    <v-icon>edit</v-icon>
                  </v-btn>
                  <v-btn fab dark small color="primary" :to="'/delete/'+props.item.id">
                    <v-icon dark>remove</v-icon>
                  </v-btn>
                </v-card-actions>
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    pagination: {
      sortBy: 'title'
    },
    selected: [],
    headers: [
      {
        text: 'name',
        align: 'left',
        sortable: false,
        value: 'title'
      },
      { text: 'id', value: 'id' },
      { text: '日期', value: 'date' },
      { text: '地点', value: 'location' }
    ]
  }),
  methods: {
    toggleAll () {
      console.log(this.selected)
      if (this.selected.length) this.selected = []
      else this.selected = this.$store.getters.loadedMeetups.slice()
    },
    changeSort (column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = column
        this.pagination.descending = false
      }
    }
  },
  computed: {
    meetups () {
      return this.$store.getters.loadedMeetups;
    }
  }
};
</script>
