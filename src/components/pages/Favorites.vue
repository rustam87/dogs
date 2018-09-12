<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Избранное'
    }
  },

  created(){
    this.$store.commit('clearActiveBreed')
    this.$store.commit('clearBreeds')
    this.$store.commit('disableFilter')
    this.$store.dispatch('getBreeds')
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
