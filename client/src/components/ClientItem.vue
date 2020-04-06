<template lang="html">
  <div id="client">
    <details>
      <summary>
        <b>{{client.name}}</b>
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
</style>
