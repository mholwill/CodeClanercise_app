<template lang="html">
  <div id="new-client-form">
    <form id="client-form" @submit.prevent="handleSubmit">
    <h2>Add a new person</h2>
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
    <input type="submit" id="save" value="Save Booking">
  </form>
  </div>

</template>

<script>
export default {
  name: "client-form",
  data(){
    return{
      newClient: {
        name: "",
        group: "",
        points: null
      }
    }
  },
  methods:{
    handleSubmit(){
      eventBus.$emit('submit-client', this.newClient);
      this.name = "";
      this.email = "";
      this.points = null
    }
  }
}
</script>

<style lang="css" scoped>
</style>
