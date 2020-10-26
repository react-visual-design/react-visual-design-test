import { defineConfig } from 'umi'
export default defineConfig({
  publicPath: '/',
  proxy: {
    '/bff': {
      target: 'https://fdy-bff-dev.huanbaoyun.cloud',
      changeOrigin: true,
    },
    '/api': {
      target: 'http://127.0.0.1:7001',
      changeOrigin: true,
    },
  },
})
