<template>
  <div id="app">
    <img src="../public/images/CCE_2.png" alt="CodeClanercise Image">
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
    this.getClients()

    eventBus.$on('submit-client', payload => {
      ClientService.postClient(payload)
      .then(client => this.clients.push(client))
      .then(this.getClients())
    })

      eventBus.$on('update-client', newScore => {
      const index = this.clients.findIndex(client => client._id === newScore._id)
      this.clients[index] = newScore
      ClientService.updateClient(newScore)
      .then(this.getClients())
    });
  },
  methods: {
    getClients () {
      ClientService.getClients()
      .then(data => this.clients = data)
    }
  }
}
</script>

<style>

  img {
    padding: 2em 0 1em 0;
  }

</style>
