<template lang="html">
  <div id="client">

        <p>Name: {{client.name}}</p>
        <p>Group: {{client.group}}</p>
        <p>Score: {{client.points}}</p>


      <form class="update-points" @submit="handleUpdate">
        <label for="points"></label>
        <input type="number" name="points">
        <input type="submit" name="Update Points">
      </form>

  </div>

</template>

<script>
import {eventBus} from '../main.js'

export default {
  name: "client",
  props: ['client'],
  methods: {
    handleUpdate(evt) {
      this.client.points += parseInt(evt.target.elements[0].value)
      console.log(evt);
      eventBus.$emit('update-client', this.client);
    }
  }
}
</script>

<style lang="css" scoped>

#client {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
