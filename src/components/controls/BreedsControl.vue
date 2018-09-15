<template>
  <select class="menu-item-select" v-model="activeBreed" @change="setActiveBreed($event)">
    <option disabled value="">Выберите один из вариантов</option>
    <option v-for="breed, breedName in breeds" :value="breedName">{{breedName}}</option>
  </select>
</template>

<script>
export default {
  data(){
    return {
      activeBreed: ''
    }
  },
  methods: {
    setActiveBreed(event){
      this.$store.commit('setActiveBreed', event.target.value);
      this.$store.dispatch('getBreeds');
      this.$router.push(event.target.value)
    }
  },

  computed: {
    breeds(){
      return this.$store.state.breedsNames;
    }
  },

  created(){
    this.$store.dispatch('getBreedsNames')
               .then((res) => {
                  this.$store.commit('updateBreedsNames', res.data.message);
                  this.$store.commit('setActiveBreed', this.$router.currentRoute.params.name);
                  this.$store.dispatch('getBreeds');
                  this.activeBreed = this.$router.currentRoute.params.name || '';

    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
