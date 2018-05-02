# Vue.js + Vuetify + MySQL 项目开发教程
.notes: Generate HTML5 slideshows by landslide

<!-- landslide cookbook.md --relative --copy-theme -d index.html -->

 * V1.1
 * liyan 2018-05-02

## 利用 Vuetify 这个 UI 组件，快速构建 基于 Vue.js 的 Web 工程 …

<!-- .qr: 450|http://172.16.100.90:10000/slide/vuetify/ -->

![QR Code](img/qr-code.png)

---

## Why Vuetify?

**Material Design**

* Material Design 是 Google 发布的全平台设计规范
* 完美支持规范中的所有色彩 和 [图标](https://material.io/icons/)

**语义化工具箱**

* 像说话一样的编写组件，让 coding 变得更加顺畅

**强大的支持**

* 响应式布局 + 活跃的社区 + 持续的更新

---

## 使用Vuetify

**确定网站布局**

* [Pre-defined Layouts](https://vuetifyjs.com/zh-Hans/layout/pre-defined)

**确定风格与主题**

* 颜色 `color`类 背景(class="color")和文字(class="color--text")
* 主题颜色包 theme: {primary:..., secondary:...}
* [主题生成器](https://vuetifyjs.com/theme-generator) 自定义颜色、默认样式等

**应用 UI 组件库**

* [Component API Overview](https://vuetifyjs.com/zh-Hans/components/api-explorer)

.notes: 扩展 - 网站的配色设计

---

## Cookbook(01-setup)
.notes: git branch 01-setup && git checkout 01-setup && git add -A && git commit -m "Cookbook(01-setup)"

参考 [快速入门](https://vuetifyjs.com/zh-Hans/getting-started/quick-start) 创建全新项目 或 引入到现存项目

** 创建 vuetify-cookbook 项目 **

  `$ vue init vuetifyjs/webpack vuetify-cookbook` //*[创建项目选用的参数](./img/cookbook-create-project.png)*

** 启动项目 **

  `npm run dev`

  `npm i webpack-dev-server --save-dev` //添加遗漏的插件

** 浏览器打开**

[http://localhost:8080](./img/cookbook-localhost-8080.png)

---

## Cookbook(02-baseline-layout)
.notes: git checkout -b 02-baseline-layout && git add -A && git commit -m "Cookbook(02-baseline-layout)"

** 布局初步 **

* 认识基本布局：头部菜单/右侧导航栏/正文/页脚

## 默认应用程序标记

    !html
    <v-app>
      <v-navigation-drawer app></v-navigation-drawer>
      <v-toolbar app></v-toolbar>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
      <v-footer app color="secondary"></v-footer>
    </v-app>

---
## 主题颜色设置与使用

    !javascript
    // src/main.js
    import colors from 'vuetify/es5/util/colors'
    Vue.use(Vuetify, {
      theme: {
        primary: colors.blue.darken2,
        secondary: colors.grey.lighten2,
    ...

    // src/App.vue
    //line 29
    <v-toolbar color="primary" dark fixed app>
    //line 57
    <v-footer color="accent" app>

* `src/main.js` <= 设置主题颜色
* `src/App.vue` <= 颜色使用主题名称
* [Material 色彩表](https://vuetifyjs.com/zh-Hans/style/colors)

---

## 布局实战

** 跟我一起敲代码 **

* 网站布局 `src/App.vue` <= 替换[Baseline Layout](https://github.com/vuetifyjs/vuetifyjs.com/blob/master/examples/layouts/baseline.vue)

---
