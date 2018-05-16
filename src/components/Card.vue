<template>
  <div>
    <v-layout class="text-xs-center">
      <v-flex xs12>
        <h2><a href="https://vuetifyjs.com/zh-Hans/components/cards">卡片</a>组件的使用</h2>
        <ol>
          <li>在 main.js 中注册 VCard 组件</li>
          <li>把 card 放到 div.layout.flex 下</li>
          <li>写一个 card-media</li>
        </ol>
        <h2>常见问题</h2>
        <h3>使用相对路径的图片在v-card中不起作用</h3>
        <code> &lt;v-card :src="require('path/to/img/img.jpg')"></code>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12>
        <v-card>
          <v-card-media
            :src="require('@/assets/img/cookbook-02-wide-window.png')"
            height="400px"
          ></v-card-media>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>