import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    // {
    //   path: '/',
    //   redirect: '/home',
    // },
    {
      name: '全站计划',
      path: '/marketing/',
      component: './Home',
    },
  ],
  npmClient: 'yarn',
  // publicPath: 'http://www.itjevon.cn/marketing/',
  proxy: {
    '/api/': {
      target: 'http://www.itjevon.cn',
      changeOrigin: true,
    }
  }

});

