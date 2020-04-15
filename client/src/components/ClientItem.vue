<template lang="html">
  <div id="client">
    <details>
      <summary>
        {{client.name}}
        {{client.group}}
        {{client.points}}
      </summary>

      <form class="update-points">
        <label for="points"></label>
        <input type="number" name="points" :value="client.points">
        <input type="submit" name="Update Points">
      </form>
    </details>
  </div>

</template>

<script>
import {eventBus} from '../main.js'

export default {
  name: "client",
  props: ['client'],
  methods: {
    handleUpdate(evt) {
      this.client.points = evt.target.elements[2].value
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
