<template>
  <div>
    <filter-control></filter-control>
    <div class="breeds">
      <div class="breeds-item"
           v-for="breed in breeds"
           :style="{ 'background-image': 'url(' + breed + ')' }">
      </div>
    </div>
  </div>
</template>

<script>
  import FilterControl from './FilterControl'

export default {
  data () {
    return {}
  },
  components: {
    FilterControl
  },
  timer: null,
  computed: {
    breeds(){
      return this.$store.state.breeds;
    },
  },
  methods: {
    loadBreeds(){
      if (this.pageIsEnd()) {
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
          this.$store.dispatch('getBreeds');
        }, 100)
      }
    },

    pageIsEnd(){
      return (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.loadBreeds);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.loadBreeds);
  },
  created(){
    this.loadBreeds();
  },
  destroyed(){
    this.$store.commit('cleerBreeds');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .breeds {
    display: flex;
    flex-wrap: wrap;

    &-item {
      width: 320px;
      height: 200px;
      background-size: cover;
      background-position: 50%;
      margin-bottom: 15px;

      &:nth-child(3n + 4){
        margin-left: 0 !important;
      }
    }

    &-item + &-item {
      margin-left: 20px;
    }
  }
</style>
