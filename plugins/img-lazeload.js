import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

// Vue.use(VueLazyload)

// or with options 也可以直接在这里设置参数
Vue.use(VueLazyload, {
  preLoad: 1, // 预加载的宽高比
  error: '/image/error.jpg', // 图片加载失败时使用的图片源
  loading: '/image/loading2.gif', // 图片加载的路径
  attempt: 2 // 尝试加载次数
})
