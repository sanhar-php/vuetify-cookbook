# Vue.js + Vuetify + MySQL 项目开发教程
.notes: Generate HTML5 slideshows by landslide

<!-- landslide cookbook.md --relative --copy-theme -d index.html -->

 * V1.2
 * liyan 2018-05-07

## 利用 Vuetify 这个 UI 组件，快速构建 基于 Vue.js 的 Web 工程 …

<!-- .qr: 450|http://172.16.100.90:10000/slide/vuetify/ -->

![QR Code](img/qr-code.png)

---

## UI Components

    +--------------+----------------------+
    |              | Vuetify    // cross  |
    |              | Framework7 // mobile |
    | UI Components| Onsen-UI   // mobile |
    |              | Element    // desktop|
    |              | Quasar     // hybrid |
    +--------------+----------------------+
    | Frontend     | Vue.js               |
    |              |                      |
    |--------------+----------------------+
    |              | Express              |
    | Backend      | sequelize            |
    |              | mysql2               |
    +--------------+----------------------+
    |              | Webpack 3            |
    |   CI         | Jest                 |
    |              |                      |
    +--------------+----------------------+

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

** 浏览器打开 **

[http://localhost:8080](./img/cookbook-localhost-8080.png)

** 第一次检出项目 **

.notes: git checkout 01-setup

  `git clone http://172.16.100.130/gerrit/web/vuetify-cookbook`

  `cnpm i`

  `npm run dev`

---

## Cookbook(02-baseline-layout)
.notes: git checkout -b 02-baseline-layout && git add -A && git commit -m "Cookbook(02-baseline-layout)" && git push origin 02-baseline-layout

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
      <v-footer app class="secondary"></v-footer>
    </v-app>

把上面的内容替换到 `src/App.vue` 中

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
* `src/App.vue` <= 颜色使用主题中的颜色名称(primary, secondary,...)
* [Material 色彩表](https://vuetifyjs.com/zh-Hans/style/colors)

---

## 布局实战 - 跟我一起敲代码

* 网站布局 `src/App.vue` <= 替换[Baseline Layout](https://github.com/vuetifyjs/vuetifyjs.com/blob/master/examples/layouts/baseline.vue)
* [基线布局效果](https://vuetifyjs.com/zh-Hans/examples/layouts/baseline) / [优化布局效果](./img/cookbook-02-wide-window.png)

### 导航: `导航抽屉` 下面写 `列表`

* 组件之[导航抽屉](https://vuetifyjs.com/en/components/navigation-drawers)
* 组件之[列表](https://vuetifyjs.com/en/components/lists) list: [tile: (action.icon, content.title), tile:...]
* [图标](https://material.io/icons/) home/contact_mail

### 工具栏
* 组件之[工具栏](https://vuetifyjs.com/en/components/toolbars) toolbar: (side-icon@click.stop, title)
* Vue.js之[事件修饰符](https://cn.vuejs.org/v2/guide/events.html)

---
## 布局实战 - 跟我一起敲代码(续)

### 页脚
* 组件之[页脚](https://vuetifyjs.com/en/components/footer)
* Styles/[colors](https://vuetifyjs.com/en/style/colors) `<span class="primary--text">&copy; 2018</span>`
* 布局之[文本对齐](https://vuetifyjs.com/zh-Hans/layout/alignment) text-xs-center

### 导航抽屉出现在工具栏下方(navigation-drawer.clipped)

    !javascript
    <v-navigation-drawer
      floating
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      app
    >

### 导航抽屉的左侧被工具栏截去(toolbar.clipped-left)

    !javascript
    <v-toolbar
      class="primary"
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
    >

---
## Cookbook(03-谷歌桌面布局)
.notes: git checkout -b 03-google-contacts-layout && git add -A && git commit -m "Cookbook(03-google-contacts-layout)" && git push origin 03-google-contacts-layout

* 网站布局 `src/App.vue` <= 替换[GoogleContacts Layout](https://github.com/vuetifyjs/vuetifyjs.com/blob/master/examples/layouts/googleContacts.vue)
* [谷歌联系人布局效果](https://vuetifyjs.com/zh-Hans/examples/layouts/googleContacts) / [编码布局效果](./img/cookbook-03-wide-window.png)

### 导航: `导航抽屉` 下面写 `列表`

* 组件之[导航抽屉](https://vuetifyjs.com/en/components/navigation-drawers)
* 组件之[列表](https://vuetifyjs.com/en/components/lists) list: [layout: [flex.subhead,...], list-group: [tile.content.title, [tile: (action.icon, content.title),...]], tile: (action.icon, content.title), tile:...] [列表注释](./img/cookbook-03-list-comment.png)
* 组件之[副标题](https://vuetifyjs.com/en/components/subheaders)
* [图标](https://material.io/icons/) 苹果图表在哪里？

---

## 图标进阶

    !html
    <link href='https://cdn.materialdesignicons.com/2.3.54/css/materialdesignicons.min.css' rel="stylesheet">

Material Design Icons [Getting Started](https://materialdesignicons.com/bootstrap)

1. 在 `index.html` 中加入上面的css代码;
2. 在 `src/App.vue` 中引入图标 icon加前缀`mdi`，例如 `<v-icon>mdi-apple</v-icon>`

---

## Cookbook(04-finish-layout)
.notes: git checkout -b 04-finish-layout && git add -A && git commit -m "Cookbook(04-finish-layout)" && git push origin 04-finish-layout

在这一课中，我们将使用v-model加载菜单。为了实现页面的交互，我们会新建几个页面(.vue)，还会修改路由设置(router.js)

[展示效果]

修改内容

* 菜单对象和展示 `src/App.vue`
* 添加页面 `src/components/`中的 DataTable.vue, 
* 路由设置 `src/router.js`

---

## 4.1 菜单对象和展示

1. 定义 menuItems 数组(三种类型): 在 `<script>` 中
2. 在 `list` 上 定义一个 `template`: `<template v-for="item in menuItems">`
3. 加载副标题(v-if item.heading) `layout`: item 包含 `heading` 时加载
4. 加载二级菜单(v-else-if item.children)

    分组标题永远可见 `<v-list-tile slot="activator">`
    二级菜单 加载 children

5. 加载一级菜单(v-else)

## 4.2 添加页面