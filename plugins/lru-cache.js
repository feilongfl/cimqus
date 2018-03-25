import Vue from 'vue'
import LRU from 'lru-cache'

var lruCache = new LRU({
  max: 1000,
  maxAge: 1000 * 60 * 15 // 15min
})

Vue.prototype.$cache = lruCache
