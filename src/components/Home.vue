<template>



  <div class="jumbotron-fluid jumbotron bg-main " style="">
    <div class="container" style="text-align: left">

      <div class="row align-items-center" style="">

        <div class="col-sm-6" style="color: white; ">
          <div class="container">
            <h1 class="display-4" style="font-weight: 700">Vinci un viaggio a Parigi</h1>
            <p class="lead">Compila il form con i tuoi dati e partecipa all'estrazione di un soggiorno a Parigi!</p>
            <p class="lead">
              Concorso valido dal 20/10/2016 al 10/11/2017. Per info consulta il <span class="">Regolamento</span>
            </p>
          </div>
        </div>
        <div class="col-sm-1" style="">
        </div>
        <div class="col-sm-5" style="color: white; display: none;">
          <h1 style="  font-weight: 600;" class="head-title">
            Vinci un viaggio a Parigi
          </h1>

          <h3 class="my-lg-5 my-sm-3">
            Compila il form con i tuoi dati e partecipa all'estrazione di un soggiorno a Parigi!
          </h3>
          <h6 class="my-lg-5 my-sm-3">
            Concorso valido dal 20/10/2016 al 10/11/2017. Per info consulta il <span class="">Regolamento</span>
          </h6>
        </div>
        <div class="col-sm form-bg">
          <form class="user-form">
            <div class="form-group">
              <label for="name">Nome</label>
              <input v-model="register.name" type="text" class="form-control" id="name" placeholder="Mario">
              <div class="invalid-feedback">
                Inserire il campo.
              </div>
            </div>

            <div class="form-group">
              <label for="surname">Cognome</label>
              <input v-model="register.surname" type="text" class="form-control" id="surname" placeholder="Rossi">
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input v-model="register.email" type="text" class="form-control" id="email" placeholder="mail@gmail.com">
            </div>

            <div class="form-group">
              <label for="phone">Telefono</label>
              <input v-model="register.phone" type="text" class="form-control" id="phone" placeholder="+39 3201515488">
            </div>

            <div class="form-group">
              <label for="birth">Data di Nascita</label>
              <input v-model="register.birth" type="text" class="form-control" id="birth" placeholder="Data di nascita">
            </div>

            <div class="form-group">

              <label for="qpar">Data di Nascita</label>
              <select v-model="register.qpar" class="custom-select" id="qpar">
                <option value="">Seleziona...</option>
                <option value="1">Si</option>
                <option value="0">No</option>

              </select>
            </div>
            <div class="form-group">
              <p class="my-0" style="font-size: 10px">ACCETTO il regolamento ed acconsento al trattamento dei dati come specificamente indicato <span>nell'informativa</span>  </p>
            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" id="informativa-in1" name="informativa" class="custom-control-input">
              <label class="custom-control-label" for="informativa-in1">Si</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" id="informativa-in0" name="informativa" class="custom-control-input">
              <label class="custom-control-label" for="informativa-in0">No</label>
            </div>
            </div>


            <div class="form-group">
              <p class="my-0" style="font-size: 10px">Autorizzo il trattamento dei dati per finalità promo-publicitarie, per inviare informazioni, materiale e offerte commerciali come specificato <span>nell'informativa della privacy</span>  </p>
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="privacy-in1" name="privacy" class="custom-control-input">
                <label class="custom-control-label" for="privacy-in1">Si</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="privacy-in0" name="privacy" class="custom-control-input">
                <label class="custom-control-label" for="privacy-in0">No</label>
              </div>
            </div>

            <div v-if="errors.length" class="alert alert-danger" role="alert">
              Errore, inserisci i dati correttamente!
            </div>
            <div v-if="success" class="alert alert-success" role="alert">
              Grazie, {{uname}}. Registrazione avvenuta con successo
            </div>

            <button @click="validateForm" type="submit" class="btn btn-primary col-sm mt-3">Invia</button>

          </form>


        </div>
      </div>
    </div>


  </div>
</template>

<script>


  export default {
    name: 'Home',
    title: 'titolo',
    data() {
      document.title = 'Home Page - Partecipa all\'estrazione di un viaggio a Parigi!';
      return {

        errors: [],
        success: false,
        uname: '',
        register: {
          qpar: ""
        },
        init: function () {


        },

        msg: 'Welcome to Your Vue.js App',

      }
    },
    methods: {
      getFormData: function () {
        return this.register
      },
      submit: function (event) {

        var data = Object.assign({}, this.getFormData());
        var JSONdata = JSON.stringify(data);

        this.uname = data.name + " " + data.surname;

        console.log(JSONdata)
      },
      validateForm: function (e) {

        this.errors = [];
        this.success = false;
        if (this.register.name && this.register.surname && this.register.qpar == 1) {
          this.success = true;
          this.submit();
          return true;
        }
        if (!this.register.name) this.errors.push("Name required.");
        if (!this.register.surname) this.errors.push("Surname required.");
        if (!this.register.qpar) this.errors.push("Choose The location.");

        e.preventDefault();

      }

    }


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


 .form-bg{
    background-color: white;
    padding: 20px;
    border-radius: 7px;
  }


  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    /*color: #42b983;*/
  }
</style>
