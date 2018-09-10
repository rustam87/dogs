<template>
  <select class="menu-item-select" v-model="activeBreed" @change="setActiveBreed($event)" name="" id="">
    <option v-for="breed, breedName in breeds" :value="breedName">{{breedName}}</option>
  </select>
</template>

<script>
export default {
  data () {
    return {

    }
  },

  methods: {
    getBreeds(){
      this.$store.dispatch('getBreedsNames');
    },

    setActiveBreed(event){
      this.activeBreed = event.target.value
      this.$router.push(event.target.value)
    }
  },

  computed: {
    breeds(){
      return this.$store.state.breedsNames;
    },

    activeBreed:{
      get(){
        return this.$store.state.activeBreed
      },

      set(newValue){
        this.$store.commit('setActiveBreed', newValue);
      }
    }
  },

  created(){
    this.getBreeds()
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
