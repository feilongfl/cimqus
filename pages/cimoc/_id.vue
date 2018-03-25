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
      return {
        id: params.id
      }
    }
  }
</script>
