import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: ' ',
    logo: false,
  },
  routes: [
    {
      name: '全站计划',
      path: '/marketing/',
      component: './Home',
    },
  ],
  npmClient: 'yarn',
  publicPath: process.env.NODE_ENV === 'development' ? '/' : 'http://www.itjevon.cn/marketing/',
  proxy: {
    '/api/': {
      target: 'http://www.itjevon.cn',
      changeOrigin: true,
    }
  }

});

