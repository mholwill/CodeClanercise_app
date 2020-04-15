<template>
  <div id="app">
    <img src="../public/images/CCE.png" alt="CodeClanercise Image">
    <client-form />
    <client-list :clients="clients" />

  </div>
</template>

<script>
import {eventBus} from "./main.js";
import ClientService from "./services/ClientService";
import NewClientForm from "./components/NewClientForm";
import ClientItem from "./components/ClientItem";
import ClientList from "./components/ClientList";

export default {
  name: 'App',
  data(){
    return{
      clients: []
    }
  },
  components: {
    "client-form": NewClientForm,
    "client-list": ClientList
  },
  mounted(){
    ClientService.getClients()
    .then(data => this.clients = data)

    eventBus.$on('submit-client', payload => {
      ClientService.postClient(payload)
      .then(client => this.clients.push(client))
    })

    eventBus.$on('update-client', (payload) => {
      ClientService.updateScore(payload)
      .then(data => this.clients = data)
   })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
