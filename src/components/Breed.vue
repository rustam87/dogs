<template>
  <div>
    {{ nameBreed }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '1'
    }
  },

  computed:{
    nameBreed(){
      return this.$store.state.activeBreed
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
