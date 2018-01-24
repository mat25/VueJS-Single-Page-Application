<template>
  <div class="jumbotron jumbotron-fluid bg-main" style="">
    <div class="container  " style="">
      <div class="row align-items-center ">
        <div class="col-sm" style="color: white">
          <h1 class="head-title" style="font-size: 90px; font-weight: 600;">
            Premi in palio
          </h1>
        </div>
      </div>


      <div class="row hide-lg align-items-center text-left justify-content-md-center pt-5">

        <div class="mx-3">
          <div class="text-center text-white px-2">
            <h5 class="mt-0 text-primary font-bolder">Primo Premio</h5>
            <p>Per il primo classificato in palio un weekend* per due persone a Parigi</p>

          </div>
          <div class="text-center">
            <img width="400" class="img-fluid align-self-center  px-0 bordered" src="../assets/img_4.jpg"
                 alt="Generic placeholder image">
          </div>

        </div>

        <div class="mx-3 pt-5">
          <div class="text-center text-white px-2">
            <h5 class="mt-0 text-primary font-bolder">Secondo Premio</h5>
            <p>Il secondo estratto si aggiudicherà un volo per Parigi.</p>

          </div>
          <div class="text-center">
            <img width="400" class="img-fluid align-self-center px-0 bordered" src="../assets/img_1.jpg"
                 alt="Generic placeholder image">
          </div>

        </div>

        <div class="mx-3 pt-5">
          <div class="text-center text-white px-2">
            <h5 class="mt-0 text-primary font-bolder">Terzo Premio</h5>
            <p>Il terzo, quarto e quinto estratto si aggiudicheranno i gadget ufficiali della città.</p>

          </div>
          <div class="text-center">
            <img width="400" class="img-fluid align-self-center  px-0 bordered" src="../assets/img_3.jpeg"
                 alt="Generic placeholder image">
          </div>

        </div>

      </div>




      <div class="row hide-sm  align-items-center text-left justify-content-md-center col-sm-10 offset-md-1 pt-5">

        <div class="media">
          <img width="400" class=" align-self-center  col-sm-7 px-0 bordered" src="../assets/img_4.jpg"
               alt="Generic placeholder image">
          <div class="text-white media-body align-self-center col-sm-5">
            <h5 class="mt-0 text-primary font-bolder">Primo Premio</h5>
            <p>Per il primo classificato in palio un weekend* per due persone a Parigi.</p>

          </div>
        </div>

        <div class="media pullUp">
          <div class="media-body text-white text-right align-self-center col-sm-5 ">
            <h5 class="mt-0 text-primary font-bolder">Secondo Premio</h5>
            <p>Il secondo estratto si aggiudicherà un volo per Parigi.</p>

          </div>
          <img width="400" class="align-self-center col-sm-7 px-0  bordered" src="../assets/img_1.jpg"
               alt="Generic placeholder image">

        </div>

        <div class="media pullUp">
          <img width="400" class="align-self-center  px-0 col-sm-7 bordered" src="../assets/img_3.jpeg"
               alt="Generic placeholder image">
          <div class=" media-body text-white align-self-center col-sm-5">
            <h5 class="mt-0 text-primary font-bolder">Terzo Premio</h5>
            <p>Il terzo, quarto e quinto estratto si aggiudicheranno i gadget ufficiali della città.</p>

          </div>
        </div>


      </div>


    </div>


  </div>
</template>

<script>


  export default {
    name: 'Premi',
    data() {
      document.title = 'Premi - Elenco di tutti i premi disponibili';
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    },

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  .bordered {

    border: 10px solid white;
    border-radius: 10px;
    box-shadow: -8px -8px 14px -10px;

  }

  @media (min-width: 992px) {
    .pullUp {
      margin-top: -60px;
    }

  }

  @media (max-width: 767.98px) {
    .hide-sm {
      display: none !important;
    }
  }

  @media (min-width: 768px) {
    .hide-lg {
      display: none !important;
    }
  }


</style>
