<template>
  <div>
    <filter-control></filter-control>
    <breeds-photos></breeds-photos>
  </div>
</template>

<script>
  import FilterControl from '../controls/FilterControl'
  import BreedsPhotos from '../BreedsPhotos'

export default {
  components: {
    FilterControl,
    BreedsPhotos
  },
  created(){
    this.$store.commit('clearActiveBreed')
    this.$store.dispatch('getBreeds')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
