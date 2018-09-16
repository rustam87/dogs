<template>
  <div class="favorites">
    <breeds-photos :data-provider="'favorites'"></breeds-photos>
  </div>
</template>

<script>
import BreedsPhotos from  '../BreedsPhotos'
export default {
  components:{
    BreedsPhotos
  },
  created(){
    this.$store.dispatch('fillFavorites', true);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
