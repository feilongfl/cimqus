<template>
  <nuxt-link :to="'/news/' + id">
    <!--{{id}}-->
    <b-media no-body>
      <b-media-aside vertical-align="center" v-if="imgsrc">
        <b-img blank-color="#ccc"
               width="128"
               height="128"
               v-lazy="imgsrc"
               alt=""/>
      </b-media-aside>
      <b-media-body class="ml-3">
        <b-container fluid>
          <b-row>
            <b-col>
              <h5 class="mt-0">{{title}}<b-badge variant="info">{{source}}</b-badge></h5>
            </b-col>
            <b-col style="text-align: right">{{date}}</b-col>
            <div class="w-100"></div>
            <b-col>
              <p>
                {{description}}
              </p>
            </b-col>
          </b-row>
        </b-container>
      </b-media-body>
    </b-media>
  </nuxt-link>
</template>

<script>
  export default {
    props: [
      'imgsrc',
      'title',
      'description',
      'date',
      'source',
      'id'
    ]
  }
</script>

<style>
  a {
    color: black;
  }

  a:hover {
    color: black;
    text-decoration: none;
  }
</style>
