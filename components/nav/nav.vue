<template>
  <section style="padding: 0px">
    <!--<p>nav is here</p>-->
    <b-navbar fixed="top" toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <nuxt-link to="/">
        <b-navbar-brand>
          {{$store.state.title}}
        </b-navbar-brand>
      </nuxt-link>

      <b-navbar-brand>
        <fl-network-status/>
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <!--<b-navbar-nav>-->
          <!--<b-nav-item href="#">Link</b-nav-item>-->
          <!--<b-nav-item href="#" disabled>Disabled</b-nav-item>-->
        <!--</b-navbar-nav>-->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <!--<fl-nav-search/>-->

          <!--<fl-nav-lang/>-->

          <!--<fl-nav-user/>-->
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </section>
</template>

<script>
  import navSearch from '~/components/nav/navSearch.vue'
  import navLang from '~/components/nav/navLang.vue'
  import navUser from '~/components/nav/navUser.vue'

  import networkStatus from '~/components/network/status.vue'

  export default {
    components: {
      'fl-nav-search': navSearch,
      'fl-nav-lang': navLang,
      'fl-nav-user': navUser,
      'fl-network-status': networkStatus
    }
  }
</script>
