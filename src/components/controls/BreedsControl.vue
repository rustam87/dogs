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
  .menu-item-select {
    height: 100%;
    border: 0;
    font-size: 16px;
    padding-left: 15px;
    -webkit-appearance: none;
    background-image: url('/static/dog.svg');
    background-position: 305px center;
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
