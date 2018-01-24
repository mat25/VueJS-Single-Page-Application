<template>

  <div class="jumbotron jumbotron-fluid bg-main" style="">
    <div class="container " style="">
      <div class="row align-items-center ">
        <div class="col-sm" style="color: white">
          <h1 class="head-title" style="font-size: 90px; font-weight: 600;">
            Partecipanti
          </h1>
        </div>

      </div>
      <p class="lead text-white my-5">Le top 10 tra i partecipanti,<br> sei tra di loro?</p>
      <div class="row align-items-center text-left text-white justify-content-center justify-content-md-center">

        <ul class="list-unstyled align-items-center ">
          <li v-for="(item, index) in users" class="media my-3">
            <div class="align-self-center mx-5">
              <h3 class="mt-0 mb-1">{{ index + 1 }}</h3>
            </div>
            <img class="mr-3 rounded-circle" :src="item.avatar_url" width="64" alt="Generic placeholder image">
            <div class="media-body  align-self-center">
              <h5 class="mt-0 mb-1">{{ item.login }}</h5>

            </div>
          </li>
        </ul>


        <div class="col-md-6" style="display: none">
          <ul class="list-group list-unstyled">

            <li href="#" class="list-group-item align-middle " v-for="item in users">
              <img :src="item.avatar_url" alt="" width="30" style="" class="mx-2 rounded-circle align-middle">

              <span class="my-5">{{ item.login }}</span>

            </li>

          </ul>
        </div>

      </div>


    </div>


  </div>
</template>

<script>



  export default {
    name: 'Partecipanti',
    data() {
      document.title = 'Partecipanti - Elenco partecipanti dell\'estrazione';
      return {

        msg: 'Welcome to Your Vue.js App',
        users: [],
        methods: {

          userList: this.$http.get('https://api.github.com/users/octocat/followers').then(response => {

            this.users = response.body.slice(0, 10);
            debugger;
          }, response => {
            // error callback
          })

        },

      }
    },


  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
