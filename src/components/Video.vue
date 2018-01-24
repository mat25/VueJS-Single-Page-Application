<template>
  <div class="jumbotron jumbotron-fluid bg-main" style="">
    <div class="container  " style="">
      <div class="row align-items-center ">
        <div class="col-sm" style="color: white">
          <h1 class="head-title" style="font-size: 90px; font-weight: 600; text-transform: uppercase">
            Guarda il video
          </h1>
          <p class="lead my-lg-5 my-sm-0">Scopri come partecipare al contest con il nostro video tutorial</p>
        </div>




        <div class="embed-responsive embed-responsive-21by9">
          <iframe class="embed-responsive-item" :src="videoEmbedded"></iframe>
        </div>

      </div>

    </div>


  </div>
</template>

<script>

  export default {
    name: 'Video',
    data() {
      return {
        videoEmbedded: 'https://www.youtube.com/embed/5XYUHJ13KHM',
      }
    },


  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
