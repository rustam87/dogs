<template>
    <div class="breed-page">
        <breeds-photos></breeds-photos>
    </div>
</template>

<script>

import BreedsPhotos from  '../BreedsPhotos'

export default {
  computed:{
    nameBreed(){
      return this.$store.state.activeBreed
    },

    breeds(){
      return this.$store.state.breeds;
    }
  },

  created(){
    this.$store.commit('clearActiveBreed');
  },

  methods: {
    getBreeds(){
      this.$store.dispatch('getBreedsByFilter', this.$store.state.activeBreed)
    }
  },

  created(){
    this.getBreeds();
  },

  components:{
      BreedsPhotos
  }
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
