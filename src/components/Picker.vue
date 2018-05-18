<template>
  <div>
    <v-layout class="text-xs-center">
      <v-flex xs12>
        <h2>
          <a href="https://vuetifyjs.com/zh-Hans/components/date-pickers">日期</a>/
          <a href="https://vuetifyjs.com/zh-Hans/components/time-pickers">时间</a>选择器组件的使用</h2>
        <h3>输入框点击后弹出选择器的效果需要在 Menu 组件上实现</h3>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs4></v-flex>
      <v-flex xs8>
        <ol>
          <li>在 main.js 中注册组件：VMenu, VDatePicker, VTimePicker</li>
          <li>设置 div.layout，分出两块flex</li>
          <li>先写日期选择器(参考Picker without buttons)</li>
          <li>把 menu 放到 div.layout.flex1 下</li>
          <li>在 menu 中放入 text-field 和 time-picker</li>
          <li>接下来写时间选择器(参考Picker in menu)</li>
          <li>把 menu 放到 div.layout.flex2 下</li>
          <li>在 menu 中放入 text-field 和 time-picker</li>
          <li>写逻辑，添加秒数自动补零</li>
        </ol>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs11 sm5>
        <v-menu ref="dateMenu" :close-on-content-click="false" :return-value.sync="date" lazy transition="scale-transition" offset-y full-width min-width="290px">
          <v-text-field slot="activator" v-model="date" label="请选择日期" prepend-icon="event" readonly></v-text-field>
          <v-date-picker v-model="date" @input="$refs.dateMenu.save(date)"></v-date-picker>
        </v-menu>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs11 sm5>
        <v-menu ref="timeMenu" :close-on-content-click="false" :return-value.sync="time" lazy transition="scale-transition" offset-y full-width min-width="290px">
          <v-text-field slot="activator" v-model="time" label="请选择时间(hh:mm)--ss自动补零" prepend-icon="access_time" readonly></v-text-field>
          <v-time-picker v-model="time" format="24hr" @change="$refs.timeMenu.save(time+':00')"></v-time-picker>
        </v-menu>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: null,
      time: null
    };
  }
};
</script>