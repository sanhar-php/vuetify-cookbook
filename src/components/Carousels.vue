<template>
  <div>
    <v-layout class="text-xs-center">
      <v-flex xs12>
        <h2><a href="https://vuetifyjs.com/zh-Hans/components/carousels">轮播</a>组件的使用</h2>
        <ol>
          <li>在 main.js 中注册 VCarousel 组件</li>
          <li>把 carousel 放到 div.layout.flex 下</li>
          <li>写一个 carousel-item</li>
          <li>在 script 中定义items数组</li>
        </ol>
        <h2><a href="https://vuetifyjs.com/zh-Hans/getting-started/frequently-asked-questions">常见问题</a></h2>
        <h3>使用相对路径的图片在v-carousel中不起作用</h3>
        <code> { src: require("@/assets/logo.png") }</code>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12>
        <v-carousel
          delimiter-icon="stop"
          prev-icon="mdi-arrow-left"
          next-icon="mdi-arrow-right"
          transition="fade"
        >
          <v-carousel-item
            v-for="(item,i) in items"
            :src="item.src"
            :key="i"
          >
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { src: "https://vuetifyjs.com/static/doc-images/cards/docks.jpg" },
        { src: require("@/assets/img/cookbook-02-wide-window.png") },
        { src: require("@/assets/logo.png") }
      ]
    };
  }
};
</script>