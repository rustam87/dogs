<template>
  <select class="menu-item-select" v-model="beeds" name="" id="">
    <option value="1">собака 1</option>
    <option value="2">собака 2</option>
    <option value="3">собака 3</option>
  </select>
</template>

<script>
export default {
  data () {
    return {
      beeds: '1'
    }
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
