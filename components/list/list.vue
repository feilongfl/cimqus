<template>
  <b-list-group>
    <!--{{project}}-->
    <div v-for="newsItem in newsItems">
      <b-list-group-item>
        <fl-news-item :imgsrc="newsItem.imgsrc"
                      :date="newsItem.date"
                      :title="newsItem.title"
                      :description="newsItem.description"
                      :id="newsItem.id"
                      :source="newsItem.source"
        />
      </b-list-group-item>
    </div>
  </b-list-group>
</template>

<script>
  import newsItem from '~/components/list/item.vue'

  export default {
    props: [
      'newsItems'
    ],
    components: {
      'fl-news-item': newsItem
    }
  }
</script>
