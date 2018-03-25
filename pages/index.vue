<template>
  <section>
    <fl-news-list :newsItems="newsItems"/>
  </section>
</template>

<script>
  import newsList from '~/components/list/list.vue'

  export default {
    components: {
      'fl-news-list': newsList
    },
    async asyncData () {
      return {
        newsItems: [
          {
            title: 'news1',
            description: 'this is news 1',
            date: '2018/2/26 16:05',
            imgsrc: '/image/default.png',
            source: '飞龙',
            id: 1
          },
          {
            title: 'news2',
            description: 'this is news 2',
            date: '2018/2/26 16:05',
            imgsrc: '/image/no-pic.png',
            source: '飞龙',
            id: 2
          },
          {
            title: 'news3',
            description: 'this is news 3',
            date: '2018/2/26 16:05',
            source: '飞龙',
            id: 3
          },
          {
            title: 'news4',
            description: 'this is news 4',
            date: '2018/2/26 16:05',
            imgsrc: '/image/default.png',
            source: '飞龙',
            id: 4
          },
          {
            title: 'news5',
            description: 'this is news 5',
            date: '2018/2/26 16:05',
            source: '飞龙',
            id: 5
          }
        ]
      }
    }
  }
</script>
