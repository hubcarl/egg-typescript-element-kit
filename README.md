# egg-typescript-element-kit

基于 Egg + TypeScript + Element + Webpack3 多页面和单页面服务端客户端渲染同构完整工程项目.

- 前台系统：http://localhost:7001

![](https://github.com/hubcarl/egg-typescript-element-kit/blob/master/docs/images/home.png)

- 后台系统：http://localhost:7001/admin

![](https://github.com/hubcarl/egg-typescript-element-kit/blob/master/docs/images/admin.png)


## 1. 项目介绍

### 插件版本

- Egg： ^2.x.x
- Node: Node ^8.x.x+,
- Webpack ^3.10.1
- Vue: ^2.5.0
- TypeScript: ^2.6.2
- Element UI: ^2.0.0
- [easywebpack-vue](https://github.com/hubcarl/easywebpack) ^3.6.0
- [egg-view-vue-ssr](https://github.com/hubcarl/egg-view-vue-ssr) ^3.0.0
- [egg-webpack](https://github.com/hubcarl/egg-webpack) ^3.2.6
- [egg-webpack-vue](https://github.com/hubcarl/egg-webpack-vue) ^2.0.0

### 项目特性

- 支持 Egg Node 端代码 和 前端代码 TypeScript 编写和构建

- 支持 service worker 自动化构建

- 支持 async 和 await 特性, Controller 采用 class 方式编写

- 支持 server 和 client 端代码修改, Webpack 时时编译和热更新, `npm run dev` 一键启动应用

- 基于 vue + vuex + vue-router + axios 单页面服务器客户端同构实现

- 支持开发环境, 测试环境，正式环境 Webpack 编译

- 支持 js/css/image 资源依赖, 内置支持CDN特性

- 支持 Webpack DLL 自动化构建

- 支持 Vue 组件服务端渲染异步加载

## 2. 系统功能

### 前台博客系统

**采用 Egg + Vue 服务端渲染**

- 博客首页
- 博客文章列表展示
- 博客文章详情页面
- 博客分类浏览

### 后台管理系统

**采用 Egg + Vue + Vue-Router + Element 单页面服务端同构渲染**

- 用户登陆
- 用户注册
- Dashboard
- 文章管理
- Markdown添加文章 
- 权限管理

## 3. 使用

#### 3.1 安装依赖

```bash
npm install
npm start
```

#### 3.2 启动应用

首次运行请先运行一次 `npm run tsc`

```bash
npm run dev
```

应用访问: http://127.0.0.1:7001

![npm start启动](https://github.com/hubcarl/egg-typescript-element-kit/blob/master/docs/images/webpack-build.png)


#### 3.3 构建

- TypeScript Egg 构建

```bash
npm run tsc
```

- TypeScript 前端工程构建

```bash
npm run tsc
```

#### 3.4 打包部署

1. 先运行 `npm run build` 构建 TypeScript Egg 代码和 TypeScript 前端代码
2. 项目代码和构建代码一起打包代码
3. 应用部署后，通过 `npm start` 启动应用

## 4. 文档

- http://hubcarl.github.io/easywebpack/vue/rule
- https://zhuanlan.zhihu.com/easywebpack

## 5. 参考资料

- [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

## License

[MIT](LICENSE)
