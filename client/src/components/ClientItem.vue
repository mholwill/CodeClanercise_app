<template lang="html">
  <div id="client">

        <p>{{client.name}}</p>
        <p>{{client.group}}</p>
        <p><span>{{client.points}}</span> points</p>


      <form class="update-points" @submit="handleUpdate">
        <label for="points"></label>
        <input type="float" name="points"><br>
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
      this.client.points += parseFloat(evt.target.elements[0].value)
      console.log(evt);
      eventBus.$emit('update-client', this.client);
    }
  }
}
</script>

<style lang="css" scoped>

#client {
  background-color: #d9e8f2;
  border: 1px solid #62a1c9;
  padding: 1.5em 3em;
  border-radius: 2em;
  width: 30%;
  margin: 2%;
  flex-basis: 30%;
  min-width: 200px;
}

#client > p {
  padding: 0.2em 0;
  font-size: 1.4em;
}

#client > p span{
  color: #62a1c9;
  font-weight: bold;
}

input[type=submit] {
  padding: 0.5em 1em;
  background-color: #62a1c9;
  border-radius: 2em;
  color: ghostwhite;
  font-size: 1em;
  margin-top: 1em;
}

input[type=submit]:hover {
  opacity: 0.7;
  cursor: pointer;
}

input[type=float] {
  border-radius: 2em;
  padding: 0.5em;
  border: none;
  margin-top: 1em;
}

</style>
