<template lang="html">
  <div id="clientsList">
    <client v-for="(client, index) in clients" :key="index" :client="client" />
  </div>
</template>

<script>
import ClientItem from './ClientItem';
export default {
  name: 'clients-list',
  components: {
    'client': ClientItem
  },
  props: ['clients']
}
</script>

<style lang="css" scoped>

#clientsList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  margin: 0 5%;
}

</style>
