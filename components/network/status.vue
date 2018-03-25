<template>
  <nuxt-link to="/networkguide">
    <div :class="['network',online ? 'online' : 'offline']">
      <!--<div class="circle"/>-->
      <!--todo offline mode guide-->
      <b-badge :variant="online? 'success':'warning'">{{ online ? 'online' : 'offline' }}</b-badge>
      <!--{{ online ? 'online' : 'offline' }}-->
    </div>
  </nuxt-link>
</template>

<script>
  export default {
    data() {
      return {
        online: true
      }
    },
    mounted() {
      if (!window.navigator) {
        this.online = false
        return
      }
      this.online = Boolean(window.navigator.onLine)
      window.addEventListener('offline', this._toggleNetworkStatus)
      window.addEventListener('online', this._toggleNetworkStatus)
    },
    methods: {
      _toggleNetworkStatus({type}) {
        this.online = type === 'online'
      }
    },
    destroyed() {
      window.removeEventListener('offline', this._toggleNetworkStatus)
      window.removeEventListener('online', this._toggleNetworkStatus)
    }
  }
</script>

<style>
  .network {
    font-weight: 400;
    font-size: 1rem;
  }

  .network .circle {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background: green;
    padding: .1rem .5rem;
    border-radius: 1rem;
  }

  .network.offline .circle {
    background: red;
  }
</style>
