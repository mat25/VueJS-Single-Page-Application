<template>
  <div class="container" style="background-color:  #ffcf6b">
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color:  #ffcf6b">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#/">
      <img src="../../assets/logo.png" width="120"  class="d-inline-block align-top" alt="">

    </a>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <a @click="activate(0)" :class=" {active : active_el == 0}" class="nav-link" href="#/">Home <span class="sr-only">(current)</span></a>
        </li>

        <li class="nav-item">
          <a @click="activate(1)" class="nav-link" :class=" {  active : active_el == 1 }"  href="#/premi">Premi</a>
        </li>
        <li class="nav-item">
          <a @click="activate(2)" class="nav-link" :class=" { active : active_el == 2 }" href="#/video">Video</a>
        </li>
        <li class="nav-item">
          <a @click="activate(3)" class="nav-link" :class=" { active : active_el == 3 }" href="#/partecipanti">Partecipanti</a>
        </li>
        <li class="nav-item">
          <a @click="activate(4)" class="nav-link"  :class=" { active : active_el == 4 }" href="../assets/regulation.pdf" download>Regolamento</a>
        </li>
      </ul>
    </div>
  </nav>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  data () {
    return {
      active_el:0,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    activate:function(el){
      this.active_el = el;
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .nav-item a{
    text-transform: uppercase;
  }

  .active{
    text-decoration: underline;
  }



  @media(min-width: 992px)   {

    .nav-item{
      margin-left: 20px;
    }
  }

</style>
