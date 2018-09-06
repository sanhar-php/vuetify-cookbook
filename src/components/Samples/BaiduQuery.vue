<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12>
        <h1>Cross-Domain access with Vue devServer.proxy</h1>
        <h2>{{ url }}</h2>
        <v-select :items="selection" v-model="url" label="访问地址" single-line></v-select>
        <v-btn @click="query(url)">click</v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12>
        <v-data-table :headers="headers" :items="items">
          <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.s }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  // 另外一种写法
  data: () => ({
    url: null,
    selection: [
      {
        text: 'http://suggestion.baidu.com/s?wd=vue',
        info: 'not allowed access'
      },
      {
        text: '/cross-domin/baidu/s?wd=vue',
        info: 'proxyTable@config/index.js'
      }
    ],
    headers: [
      {
        text: 'Enter Query String ()',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'Suggestion', value: 's' }
    ],
    items: []
  }),
  methods: {
    query (url) {
      if (url === null || url === 'undefined') return
      // window.baidu = {
      //   sug: function (options) {
      //     console.dir(options);
      //   }
      // };
      // console.log("url =", url.text);
      axios
        .get(this.url)
        .then(resp => {
          // console.log("resp =", resp.data);
          let parseData = JSON.parse(
            resp.data
              .replace(/window.baidu.sug\(/, '')
              .replace(/\)/, '')
              .replace(/q/, '"$&"')
              .replace(/p/, '"$&"')
              .replace(/,s/, ',"s"')
              .replace(/;/, '')
          )
          this.headers[0].text = 'Query String (' + parseData.q + ')'
          console.log('json.s =', parseData.s)
          for (let i = 0; i < parseData.s.length; i++) {
            this.items.push({
              value: false,
              name: parseData.q,
              s: parseData.s[i]
            })
          }
        })
        .catch(err => {
          alert(err)
        })
    }
  }
}
</script>
