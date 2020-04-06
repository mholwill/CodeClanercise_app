<template>
  <div id="app">
    <h1>CodeClanercise</h1>
    <client-form />
  </div>
</template>

<script>
import {eventBus} from "./main.js";
import NewClientForm from "./components/NewClientForm";

export default {
  name: 'App',
  data(){
    return{
      clients: []
    }
  },
  components: {
    "client-form": NewClientForm
  },
  mounted(){
    ClientService.getClients()
    .then(data => this.clients = data)

    eventBus.$on('submit-client', newClient => {
      ClientService.postClient(newClient)
      .then(client => this.clients.push(client))
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
