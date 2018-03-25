<template>
  <section>
    <b-alert show>
      {{id}}
    </b-alert>
    <fl-disqus :pageId="id" />
    <b-media>
      <h5 class="mt-0">Tips</h5>
      <p class="mb-0">
        本网站基于 Disqus 服务，仅能在部分国家或地区使用。如果您无法加载讨论，请检查您当地的网络服务政策。
      </p>
    </b-media>
  </section>
</template>

<script>
  import disqus from '~/components/disqus/disqus.vue'
  // import Vue from 'vue'

  export default {
    components: {
      'fl-disqus': disqus
    },
    asyncData: async function ({store, params}) {
      return {
        id: params.id
      }
    }
  }
</script>
