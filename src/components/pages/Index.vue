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
    this.$store.commit('clearBreeds')
    this.$store.commit('disableFilter')
    this.$store.dispatch('getBreeds')
  },
  destroyed(){
    this.$store.commit('clearBreeds')
    this.$store.commit('disableFilter')
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .breeds {
    display: flex;
    flex-wrap: wrap;

    &-item {
      width: 320px;
      height: 200px;
      background-size: cover;
      background-position: 50%;
      margin-bottom: 15px;

      &:nth-child(3n + 4){
        margin-left: 0 !important;
      }
    }

    &-item + &-item {
      margin-left: 20px;
    }
  }
</style>
