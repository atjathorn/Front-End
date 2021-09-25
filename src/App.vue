<template>
  <div id="app">
    <AppHeader />
    <router-view :style="styleContent" class="app-content" />
    <AppFooter />
  </div>
</template>
<script>
import AppFooter from '@/components/layout/AppFooter'
import AppHeader from '@/components/layout/AppHeader'

export default {
  components: {
    AppFooter,
    AppHeader,
  },
  data() {
    return {
      styleContent: {
        'min-height': '0px',
      },
    }
  },
  mounted() {
    this.setContent()
    window.addEventListener('resize', this.setContent)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setContent)
  },
  methods: {
    setContent() {
      const heightHead = document.getElementById('head').clientHeight
      const heightFoot = document.getElementById('footer').clientHeight
      this.styleContent['min-height'] = `calc(100vh - ${
        heightHead + heightFoot
      }px)`
    },
  },
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa');

body {
  margin: 0;
}
#app {
  font-family: 'Montserrat';
  min-height: 100vh;
  background-color: #e5e5e5;
  .app-content {
    max-width: 1680px;
    margin: 0 auto;
  }
}
</style>
