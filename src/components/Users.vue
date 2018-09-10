<template>
  <v-container>

    <!-- 数据增加、编辑对话框: dialog，参考https://vuetifyjs.com/zh-Hans/components/dialogs -->
    <div class="text-xs-center">
      <v-dialog v-model="dialog" persistent width="500">
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>
            {{ dialogTitle }}
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex v-for="field in columns" :key="field.text" v-show="!field.pk" xs12 sm6 md4>
                  <v-text-field v-model="dialogData[field.value]" :label="field.text" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="dialogData.company.name" label="Company" required></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-btn color="blue darken-1" flat @click.native="dialog = false">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="saveOrUpdateData(dialogAction)">{{dialogAction}}</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <!-- 数据表显示: data-table -->
    <v-layout row wrap>
      <v-flex xs12 lg12>
        <span class="text-xs-center" v-if="loading">Loading…</span>
        <h3 class="primary--text text-xs-center">User List</h3>
        <!-- https://vuetifyjs.com/zh-Hans/components/data-tables -->
        <v-data-table v-model="selected" :headers="columns" :items="datas" hide-actions :pagination.sync="pagination" select-all item-key="name" class="text-xs-center">
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
              <th>Company</th>
              <th>
                操作
                <v-btn outline fab dark small color="cyan" @click="addData()">
                  <v-icon>add</v-icon>
                </v-btn>
              </th>
            </tr>
          </template>
          <!-- table-datas -->
          <template slot="items" slot-scope="props">
            <tr :active="props.selected" @click="props.selected = !props.selected">
              <td>
                <v-checkbox :input-value="props.selected" primary hide-details></v-checkbox>
              </td>
              <td v-for="header in columns" :key="header.id">{{ props.item[header.value]}}</td>
              <td>{{ props.item.company.name}}</td>
              <td>
                <v-card-actions>
                  <v-btn outline fab dark small color="cyan" @click="editData(props.item.id)">
                    <v-icon>edit</v-icon>
                  </v-btn>
                  <v-btn fab dark small color="primary" @click="removeData(props.item.id)">
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
    dialog: false,
    dialogTitle: "dialog",
    dialogAction: "Action",
    dialogData: {company:{}, address:{}},
    pagination: {
      sortBy: 'name'
    },
    selected: [],
    // define table columns
    columns: [
      {
        text: 'name',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'id', value: 'id', pk: true },
      { text: 'phone', value: 'phone' },
      { text: 'email', value: 'email' },
      { text: 'website', value: 'website' }
    ]
  }),
  methods: {
    toggleAll () {
      // console.log(this.selected)
      if (this.selected.length) this.selected = []
      else this.selected = this.$store.getters.loadedUsers.slice()
    },
    changeSort (column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = column
        this.pagination.descending = false
      }
    },
    addData () {
      this.dialogTitle = 'Add User'
      this.dialogAction = 'Save'
      this.dialogData = {company:{}, address:{}}
      this.dialog = true
    },
    editData (id) {
      this.dialog = true
      this.dialogTitle = 'Edit User'
      this.dialogAction = 'Update'
      //load user from store
      let user = this.$store.getters.loadedUser(id)
      // clone object
      Object.assign(this.dialogData, user)
      console.log('updating data =', this.dialogData)
    },
    /**
     * close dialog and change data
     */
    saveOrUpdateData (action) {
      this.dialog = false
      // console.log(this.dialogData)
      if (action === 'Save') {
        console.log('saving ...')
        console.log('company =', this.dialogData.company.name)
        this.$store.dispatch('createUser', this.dialogData)
      } else if(action === 'Update') {
        console.log('updating ...')
        this.$store.dispatch('updateUser', this.dialogData)
      }
    },
    removeData (id) {
      var isDelete = window.confirm("是否删除")
      if (isDelete) {
        this.$store.dispatch("deleteUser", {
          id
        })
      }
    },
  },
  computed: {
    datas () {
      return this.$store.getters.loadedUsers;
    },
    loading () {
      return this.$store.getters.loading;
    }
  },

  created () {
    this.$store.dispatch('fetchUsersData')
  }
};
</script>
