import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'mify-ui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  publicPath:"./",
  mode: 'site',
  copy:["./assets/**"],
  apiParser:{
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: true,
      // 是否忽略没有文档说明的属性，默认值为 false
      skipPropsWithoutDoc: false,
    }
  }
  // more config: https://d.umijs.org/config
});
