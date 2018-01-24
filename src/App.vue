<template>
  <div id="app">
    <Toolbar/>
    <router-view  />
    <Footer/>
  </div>
</template>

<script>

  import Toolbar from './components/tmp/Toolbar'
  import Footer from './components/tmp/Footer'

  export default {
    name: 'App',
    title: 'titolo',
    components: {
      Toolbar, Footer
    },
    meta: {title: 'Home'}
  }
</script>

<style>

  .bg-main {
    background: url(./assets/img_2.jpg) center center no-repeat;
    background-size: cover;
    background-color: #001e38;
    width: 100%;
    height: 100%;
  }

  .font-bolder {
    font-weight: 700;
  }

  .jumbotron {
    margin-bottom: 0rem;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
</style>
