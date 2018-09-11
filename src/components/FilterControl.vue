<template>
  <select v-model="activeBreed">
    <option>Фильтровать по:</option>
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
      this.$store.dispatch('addBreeds')
    }
  },

  beforeCreate(){

  },

  created(){

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
