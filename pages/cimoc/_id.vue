<template>
  <section>
    <h1>
      {{id}}
    </h1>
    <!--<p>-->
      <!--{{doc}}-->
    <!--</p>-->
    <fl-disqus :pageId="id" />
  </section>
</template>

<script>
  import disqus from '~/components/disqus/disqus.vue'
  import Vue from 'vue'

  export default {
    components: {
      'fl-disqus': disqus
    },
    asyncData: async function ({store, params}) {
      // console.log('p => ', params) // for debug
      // todo get news
      // var document = await Vue.prototype.$http(store, 'www.baidu.com')
      // console.log('doc', document)
      // Must be a number
      return {
        id: params.id
        // doc: document
      }
    }
  }
</script>
