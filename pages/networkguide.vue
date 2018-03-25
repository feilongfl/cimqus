<template>
  <section class="container">
    <!--<h2 class="net-title">-->
      <!--PWA GUIDE-->
    <!--</h2>-->
    <!--<p class="net-cont">-->
      <!--I'm based on pwa,if you install me,you can use me offline to read saved news.-->
    <!--</p>-->

    <b-container class="bv-example-row">
      <b-row>
        <b-col class="net-title">NETWORK GUIDE</b-col>
        <div class="w-100"></div>
        <b-col class="net-cont">I'm based on pwa,if you install me,you can use me offline to read saved news.</b-col>
      </b-row>
    </b-container>
  </section>
</template>

<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .net-title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    text-align: center;
    font-weight: 300;
    font-size: 60px;
    display: block;
    /*color: #526488;*/
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .net-cont {
    font-weight: 300;
    font-size: 42px;
    padding-top: 30px;
  }
</style>
