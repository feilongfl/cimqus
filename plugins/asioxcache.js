import Vue from 'vue'
import axios from 'axios'

export const flGetJson = async (store, url) => {
  console.log(Vue.prototype.$cache)
  let data = Vue.prototype.$cache.get(url)
  if (data) {
    console.log('read from lru cache', url)
    return {items: JSON.parse(data)}
  }
  console.log('no lru cache', url)
  const res = await axios.get(url)
  data = res.data
  Vue.prototype.$cache.set(url, JSON.stringify(data))
  // store.commit('updateCache', store.state.cache)
  return {items: data}
}

Vue.prototype.$http = flGetJson
