module.exports = {
  /*
  ** Build configuration
  */
  build: {},
  cache: {
    max: 1000,
    maxAge: 60000
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    meta: [
      {charset: 'utf-8'}
    ],
    script: [
      // {src: 'https://cdnjs.cloudflare.com/ajax/libs/webtorrent/0.98.21/webtorrent.min.js'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#eaf166'},
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#336ea4'
  },
  mode: 'spa',
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt'
  ],
  plugins: [
    // '~/plugins/asioxcache'
    '~/plugins/vue-notifications',
    '~/plugins/lru-cache',
    '~/plugins/asioxcache',
    '~/plugins/img-lazeload'
  ],
  render: {
    bundleRenderer: {
      cache: require('lru-cache')({
        max: 1000,
        maxAge: 1000 * 60 * 15
      })
    }
  },
  router: {
    middleware: [
      'debug'
    ]
  }
}
