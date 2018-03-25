<template>
  <section>
    <!--navbar-->
    <fl-nav />
    <!--body-->
    <div style="padding-top: 50px">
      <nuxt />
    </div>
  </section>
</template>

<script>
  /* eslint-disable spaced-comment */

  import nav from '~/components/nav/nav.vue'

  export default {
    components: {
      'fl-nav': nav
    },
    mounted () {
      var lastY = 0

      window.addEventListener('touchmove', function (e) {
        var scrolly = window.pageYOffset || window.scrollTop || 0
        var direction = e.changedTouches[0].pageY > lastY ? 1 : -1

        if (direction > 0 && scrolly === 0) {
          e.preventDefault() // 禁用下拉刷新
          // todo 下拉刷新
          console.log('drop down')
        } else if (direction < 0 && scrolly === (document.body.clientHeight - window.innerHeight)) {
          // todo 底部上啦 加载更多
          console.log('to down', scrolly)
        }
        lastY = e.changedTouches[0].pageY
      }, {passive: false})
    }
  }
</script>

<style>
  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  /*body {*/
    /*overflow-y: hidden;*/
  /*}*/

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }
</style>
