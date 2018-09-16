<template>
    <div class="breeds" @click="addToFavorites">
      <div class="breeds-item"
           :data-src="breed"
           v-for="breed in breeds"
           :style="{ 'background-image': 'url(' + breed + ')' }">
      </div>
      <div v-if="breeds.length === 0 && dataProvider === 'favorites'">
          <h1>Вы ничего не добавили</h1>
      </div>
    </div>

</template>

<script>
export default {
  props: ['dataProvider'],

  computed:{
    breeds(){
      return this.dataProvider === 'favorites'? this.$store.state.favoriteBreeds : this.$store.state.breeds;
    },
  },
  timer: null,
  methods: {
    loadBreeds(){
      if (this.pageIsEnd()) {
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
          this.$store.dispatch('getBreeds', true);
        }, 150)
      }
    },
    pageIsEnd(){
      return (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200
    },

    addToFavorites(event){
      const favorites = this.$store.state.favoriteBreeds

      if (event.target.classList.contains('breeds-item')) {
        const currentImgSrc = event.target.dataset.src;
        if (!favorites.includes(currentImgSrc)) {
          this.$store.commit('addFavorites', currentImgSrc);
        }
      }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.loadBreeds);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.loadBreeds);
  },
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

        &.before {

        }

        &:hover {

        }

      &:nth-child(3n + 4){
         margin-left: 0 !important;
       }
      }

      &-item + &-item {
         margin-left: 20px;
      }
  }
</style>
