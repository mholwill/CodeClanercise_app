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

</style>
