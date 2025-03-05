import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  "base": "/bigScreen/",
  plugins: [vue()],
   optimizeDeps: {
    include: ['vue', 'vue-router', 'vuex']  // 确保必要的依赖被正确解析
  },
})
