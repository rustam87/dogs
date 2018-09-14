<template>
  <select v-model="activeBreed" @change="setActiveBreed($event)">
    <option disabled value="">Выберите один из вариантов</option>
    <option v-for="(breed, breedName, index) in breeds">{{breedName}}</option>
  </select>
</template>

<script>
export default {
  data(){
    return {
      activeBreed: ""
    }
  },
  computed:{
    breeds(){
      return this.$store.state.breedsNames
    },
  },
  methods: {
    setActiveBreed(event){
      this.$store.commit('setActiveBreed', event.target.value)
    }
  },
}
</script>

<style scoped>

</style>
