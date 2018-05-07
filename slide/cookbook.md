# Vue.js + Vuetify + MySQL 项目开发教程
.notes: Generate HTML5 slideshows by landslide

<!-- landslide cookbook.md --relative --copy-theme -d index.html -->

 * V1.1
 * liyan 2018-05-02

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
