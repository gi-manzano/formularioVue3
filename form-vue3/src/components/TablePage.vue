<template>
    <section class="container table-page card app">
      <h1 class="text-center">Lista de Usuarios: </h1>
        <table class="table table-striped">
            <thead class="thead-light">
                <tr>
                    <th>Usuario</th>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Email</th>
                </tr>
            </thead>
            <br>
            <tbody>
                <tr v-for="user in showUsers" :key="user.index">
                    <td> {{user.name}}</td>
                    <td> {{user.email}}</td>
                    <td> {{user.password}}</td>
                    <td> {{ user.edad}}</td> 
                    <td> <button class="btn btn-warning" @click="deleteRegistro(user)">Eliminar</button> </td>
                </tr>
            </tbody>
            <br>
        </table>
    </section>
</template>

<script>
import {mapGetters} from 'vuex'

export default {

    name: 'tabla-usuarios',
    props: {
    },
    methods: {
    show () {console.log (this.showUsers)}
    },
    computed : {
      ...mapGetters ({
        showUsers: 'showUsers'
      })
    },
}
</script>

<style scoped>
.table {
  background-color: rgb(219, 149, 207);
}


</style>