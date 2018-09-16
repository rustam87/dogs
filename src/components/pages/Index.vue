<template>
  <div class="index-page">
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
    this.$store.commit('clearBreeds')
    this.$store.dispatch('getBreeds')
  }
}
</script>

<style scoped lang="scss">
  .index-page {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
</style>
