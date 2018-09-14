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
                  <v-text-field v-model="dialogData[field.value]" :rules="field.rules" :label="field.text" required></v-text-field>
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

    <!-- 网络请求进度条 -->
    <v-layout>
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular indeterminate class="primary--text" :width="7" :size="70" v-if="loading"></v-progress-circular>
      </v-flex>
    </v-layout>
    <!-- 数据表显示: data-table -->
    <v-layout row wrap v-if="!loading">
      <v-flex xs12 lg12>
        <span class="text-xs-center error--text" v-if="error">{{ error }}</span>
        <h3 class="primary--text text-xs-center">Product List</h3>
        <!-- https://vuetifyjs.com/zh-Hans/components/data-tables -->
        <v-data-table v-model="selected" :headers="columns" :items="datas" :pagination.sync="pagination" select-all item-key="id" class="text-xs-center">
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
              <th>
                操作
                <v-btn outline fab dark small color="cyan" @click="addDialog()">
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
              <td>
                <v-card-actions>
                  <v-btn outline fab dark small color="cyan" @click="editDialog(props.item.id)">
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
import { mapState } from 'vuex'
export default {
  data: () => ({
    dialog: false,
    dialogTitle: "dialog",
    dialogAction: "Action",
    dialogData: { company: {}, address: {} },
    pagination: {
      sortBy: 'id'
    },
    selected: [],
    rules: {
      required: value => !!value || 'Required.',
      counter: value => value.length <= 20 || 'Max 20 characters',
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
      }
    },
    // define table columns
    columns: [
      {
        text: 'title',
        align: 'left',
        sortable: false,
        value: 'title'
      },
      { text: 'id', value: 'id', pk: true },
      { text: 'price', value: 'price' },
      { text: 'inventory', value: 'inventory' }
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
    addDialog () {
      this.dialogTitle = 'Add Products'
      this.dialogAction = 'Save'
      this.dialogData = {}
      this.dialog = true
    },
    editDialog (id) {
      this.dialog = true
      this.dialogTitle = 'Edit Products'
      this.dialogAction = 'Update'
      //load data from store
      let data = this.$store.getters['products/loadedProduct'](id)
      // clone object
      this.dialogData = {}
      Object.assign(this.dialogData, data)
      // console.log('updating data =', this.dialogData)
    },
    /**
     * close dialog and change data
     */
    saveOrUpdateData (action) {
      this.dialog = false

      // console.log(this.dialogData)
      if (action === 'Save') {
        console.log('saving ...')
        this.$store.dispatch('products/create', this.dialogData)
      } else if (action === 'Update') {
        console.log('updating ...')
        this.$store.dispatch('products/update', this.dialogData)
      }
    },
    removeData (id) {
      var isDelete = window.confirm("是否删除")
      if (isDelete) {
        this.$store.dispatch("products/delete", {
          id
        })
      }
    },
  },
  computed: {
    ...mapState({
      datas: state => state.products.all
    }),
    // datas () {
    //   return this.$store.getters('products/all');
    // },
    loading () {
      return this.$store.getters.loading;
    },
    error () {
      return this.$store.getters.error;
    }
  },

  created () {
    this.$store.dispatch('products/getAll')
  }
};
</script>
