<template>
  <select v-model="activeBreed">
    <option disabled value="">Выберите один из вариантов</option>
    <option v-for="(breed, breedName, index) in breeds">{{breedName}}</option>
  </select>
</template>

<script>
export default {
  data(){
    return {
      activeBreed: ''
    }
  },
  computed:{
    breeds(){
      return this.$store.state.breedsNames
    }
  },
  watch:{
    activeBreed(){
      this.$store.dispatch('getBreedsByFilter', this.activeBreed !== 'Фильтровать по:' ? this.activeBreed: null)
    }
  }
}
</script>

<style scoped>

</style>
