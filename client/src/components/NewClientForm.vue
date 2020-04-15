<template lang="html">
  <div id="new-client-form">
    <form id="client-form" @submit.prevent="handleSubmit">

    <h2>Add a new person</h2>
    <details>
      <summary></summary>
      <div class="form-wrap">
        <label for="name">Name: </label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div class="form-wrap">
        <label for="group">Group: </label>
        <input type="text" id="group" v-model="group" required>
      </div>
      <div class="form-wrap">
        <label for="points">Number of points: </label>
        <input type="number" id="points" v-model="points">
      </div>
      <input type="submit" id="save" value="Save Person">
    </details>
  </form>
  </div>

</template>

<script>
import {eventBus} from '../main.js'

export default {
  name: "client-form",
  data(){
    return{
        name: "",
        group: "",
        points: null
      }
  },
  methods:{
    handleSubmit(){
      const payload = {
        name: this.name,
        group: this.group,
        points: parseFloat(this.points)
      };
      eventBus.$emit('submit-client', payload);
      this.name = "";
      this.group = "";
      this.points = null
    }
  }
}
</script>

<style lang="css" scoped>

#new-client-form {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 4em;
}

#client-form {
  border: 2px solid #62a1c9;
  border-radius: 2em;
  padding: 2em;
}

</style>
