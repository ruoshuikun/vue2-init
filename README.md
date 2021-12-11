# vue2-init

## vue2初始化

- Layout 布局

  - Header 头部
  - Footer 尾部

- 异常页面

  - 404

- 样式

  - Scss variables

  - [normalize.css](https://github.com/necolas/normalize.css)

- .prettierrc.js 格式化

- vue.config.js

  - alias 添加路径别名

    ```javascript
    chainWebpack: (config) => {
      config.resolve.alias
        .set('@', resolve('./src'))
        .set('comps', resolve('./src/components'))
        .set('img', resolve('./src/assets/img'))
        .set('assets', resolve('./src/assets'))
        .set('apis', resolve('./src/apis'))
        .set('utils', resolve('./src/utils'))
        .set('views', resolve('./src/views'))
    }
    ```

  - css.loaderOptions 设置

    ```javascript
    css: {
      loaderOptions: {
      	sass: {
      		prependData: `@import "./src/assets/styles/_variables.scss";`
      	}
      }
    }
    ```


## 安装依赖
```
pnpm install
```

### 编译和热重载以进行开发
```
pnpm run serve
```

### 编译和最小化以用于生产
```
pnpm run build
```
