<template>
  <select class="filter-control"v-model="activeBreed" @change="setActiveBreed($event)">
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
      this.$store.dispatch('getBreeds')
    }
  },
}
</script>

<style scoped>
  .filter-control{
    height: 35px;
    border: 0;
    font-size: 16px;
    padding-left: 15px;
    width: 320px;
    margin-bottom: 20px;
    -webkit-appearance: none;
    background-image: url('/static/dog.svg');
    background-position: 290px center;
    background-repeat: no-repeat;
    background-size: 20px 20px;
    line-height: 1em;
    /* for FF */
    -moz-appearance: none;
    text-indent: 0.01px;
    text-overflow: '';
    /* for IE */
    -ms-appearance: none;
    appearance: none!important;
  }


</style>
