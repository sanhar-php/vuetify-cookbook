# 项目创建步骤记录

## 环境

```bash
➜  ~ ✗ uname -v
Darwin Kernel Version 17.7.0
➜  ~ ✗ ulimit -n
10240
➜  ~ ✗ node -v
v8.11.3
➜  ~ ✗ npm -v
6.4.1
➜  ~ ✗ vue -V
3.0.1
```

## 创建项目

```bash
➜  ~ ✗ vue create vuetify-cookbook

Vue CLI v3.0.1
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Router, Vuex, CSS Pre-processors, Linter, Unit, E2E
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Stylus
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save
? Pick a unit testing solution: Jest
? Pick a E2E testing solution: Nightwatch
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In package.json
? Save this as a preset for future projects? Yes
? Save preset as: ~/.vuerc

➜  ~ ✗ cd vuetify-cookbook
➜  vuetify-cookbook git:(master) ✗ vue add vuetify

📦  Installing vue-cli-plugin-vuetify...

+ vue-cli-plugin-vuetify@0.1.6
added 1 package from 1 contributor in 11.15s
✔  Successfully installed plugin: vue-cli-plugin-vuetify

? Use a pre-made template? (will replace App.vue and HelloWorld.vue) Yes
? Use custom theme? Yes
? Use a-la-carte components? No
? Use babel/polyfill? Yes
```

## 参考内容

- [Vue CLI-3 Install](https://vuetifyjs.com/zh-Hans/getting-started/quick-start#vue-cli-3)
- [vue create](https://cli.vuejs.org/guide/creating-a-project.html#vue-create) ~/.vuerc
- [Presets](https://cli.vuejs.org/guide/plugins-and-presets.html#presets) 是一个包含创建新项目所需预定义选项和插件的 JSON 对象，让用户无需在创建命令提示中选择它们

## 代码

### 整体结构

- src/main.js
- src/App.vue
- src/router.js
- src/store.js

```
├── README.md
├── babel.config.js
├── node_modules
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── slide
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   └── HelloWorld.vue
│   ├── main.js
│   ├── router.js
│   ├── store.js
│   └── views
│       ├── About.vue
│       └── Home.vue
└── tests
    └── unit
        └── HelloWorld.spec.js
```

### mock by json-server

- [How to Use Mock Data in Vue Apps](https://tahazsh.com/use-mock-data-in-vue) 通过 vuex 实现数据显示和获取， 逻辑很清晰
- [Fake Online REST API](https://jsonplaceholder.typicode.com/)

## 单元测试
### Jest 运行配置

```json
...
    "transformIgnorePatterns": [
      "node_modules/(?!(babel-jest|jest-vue-preprocessor)/)"
    ],
    "moduleNameMapper": {

```

```bash
jest --clearCache # clear cache
npm run test:unit
```

### Vuex Actions

- https://sinonjs.org/ `npm install sinon --save-dev`