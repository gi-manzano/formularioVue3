<template>
  <section class="formulario-page ">
    <div class="row">
     
        <div class="col-12 d-flex justify-content-center">

            <form @submit.prevent ="addUsuario" >
            <div class="col-md-12 mb-2">
              <label class="form-label" for="nombre">Nombre y Apellido</label>
              <input maxlength="30" type="text" id="nombre" class="form-control" @keyup="validarNombre" v-model="usuario.nombre">
            </div>
             <div class="col-md-12 mb-2" v-if='mensajeNombre != ""'>
                <p class="errorForm">{{ mensajeNombre }}</p>
            </div>
            <div class="col-md-12 mb-2">
              <label class="form-label" for="mail">Email</label>
              <input maxlength="30" type="text" id="mail" class="form-control" @keyup="validarEmail" v-model.lazy="usuario.email">
            </div>
            <div class="col-md-12 mb-2" v-if='mensajeEmail != ""'>
                <p class="errorForm">{{ mensajeEmail }}</p>
            </div>
            <div class="col-md-12 mb-2">
              <label class="form-label" for="edad">Edad</label>
              <input type="number" min="18" max="100" class="form-control" @keyup="validarEdad" v-model="usuario.edad">
            </div>
            <div class="col-md-12 mb-2" v-if='mensajeEdad != ""'>
                <p class="errorForm">{{ mensajeEdad }}</p>
            </div>
            <div class="col-md-12 mb-2">
              <label class="form-label" for="password">Contraseña</label>
              <p> 8 caracteres que incluyan <br> ((Aa)(123456789)(!-&%)</p>
              <input maxlength="8" type="password" class="form-control" @keyup="validarPassword" v-model="usuario.password">
            </div>
             <div class="col-md-12 mb-2" v-if='mensajePassword != ""'>
                <p class="errorForm"> {{ mensajePassword }} </p>
            </div>
            <div class="col-md-12 mb-2">
              <br>
                <input type="button" class="btn btn-secondary btn-lg mb-2" value="Enviar" @click="addUsuario"/>
                

            </div>
            </form>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  name: 'FormularioPage',
    data() {
        return {
            usuario: {
                nombre: "",
                email: "",
                edad: "",
                password: "",

            },
            mensajeNombre: "",
            mensajeEmail: "",
            mensajeEdad: "",
            mensajePassword: "",
        }
    },
        
    methods: {
        addUsuario() {
            if (this.checkForm()){
                this.$emit('emit-agregar-usuario', this.usuario);
                this.usuario.nombre = '';
                this.usuario.email = '';
                this.usuario.edad = '';
                this.usuario.password = '';
                return alert ('formulario enviado!!')
            } else {
              alert ("Erorr, uno o mas campos están vacios!!")
            }
        },
        checkForm () {
            return (this.validarNombre() && this.validarEmail() && this.validarEdad() && this.validarPassword())
            },
        
        validarNombre(){
        
        if (this.usuario.nombre){
            this.mensajeNombre = "Nombre Valido"
            return true;
          } else {
            this.mensajeNombre = "Nombre inválido";
            return false;
          }

        },

        validarEmail(){
            
            let emailRegex1 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (emailRegex1.test(this.usuario.email)){
                this.mensajeEmail = "Email Válido";
                return true;
            } else {
                this.mensajeMail = "Email inválido";
                return false;
            }
        },

        validarEdad(){
            if (this.usuario.edad >= 18 && this.usuario.edad <=100) {
                this.mensajeEdad = "Edad Válida";
                return true;
            } else {
                this.mensajeEdad = "Edad inválida";
                return false;
            } 
        },

        validarPassword(){

          let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
            if (passwordRegex.test(this.usuario.password)){
                this.mensajePassword = "Password Válido";
                return true;
            } else {
                this.mensajePassword = "Password inválido";
                return false;
            }
        },

        EnviarData () {
          let data = {
            name: this.name,
            email: this.email,
            password: this.password,
            edad: this.edad
          } 
          console.log (data)
            this.$store.dispatch ('postRegister', data)
        },

          },

    // watch : {
    //   email (nuevo){
    //     this.validarEmail (nuevo)
    //   }
    // },
    resetForm () {
      this.name = ''
      this.email = ''
      this.password = ''
      this.edad = ''

    },
    computed : {}
}
</script>

<style scoped>
.app {
    background-color: rgb(175, 239, 218);;
}
.errorForm{
    color:rgb(218, 116, 116);
    font-size: 20px;
}

</style>