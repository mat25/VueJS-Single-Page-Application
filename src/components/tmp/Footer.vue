<template>
<!--<p>&copy; 2016 Company, Inc.</p>-->

  <div class="jumbotron jumbotron-fluid">
    <div class="container follow">
      <h1 class="display-5">Seguici sui social</h1>
      <p class="lead">
        <i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
        <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>
        <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
        <i class="fa fa-youtube-play fa-2x" aria-hidden="true"></i>


      </p>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .follow h1 {
    text-transform: uppercase;
    font-weight: 700;
  }

  .jumbotron{

    background: #001e38;
    color: #ffcf6b;
    padding-bottom: 1.5rem;
  }


  .lead .fa{
    margin: 0px 20px;
  }

</style>
