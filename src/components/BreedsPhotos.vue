<template>
  <div class="breeds" @click="addToFavorites">
    <div class="breeds-item"
         :class="dataProvider === 'favorites' ? 'favorites-item' : ''"
         :data-src="breed"
         :key="index"
         v-for="(breed, index) in breeds"
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

  computed: {
    breeds () {
      return this.dataProvider === 'favorites' ? this.$store.state.favoriteBreeds : this.$store.state.breeds
    }
  },
  timer: null,
  methods: {
    loadBreeds () {
      if (this.pageIsEnd()) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.$store.dispatch('getBreeds', true)
        }, 150)
      }
    },
    pageIsEnd () {
      return (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200
    },

    addToFavorites (event) {
      if (this.dataProvider === 'favorites') {
        return
      }

      const favorites = this.$store.state.favoriteBreeds

      if (event.target.classList.contains('breeds-item')) {
        event.target.classList.add('active')
        const currentImgSrc = event.target.dataset.src
        if (!favorites.includes(currentImgSrc)) {
          this.$store.commit('addFavorites', currentImgSrc)
        }
      }
    }
  },
  updated () {
    [...document.querySelectorAll('.breeds-item')].forEach((el) => {
      el.classList.remove('active')
    })
  },
  beforeMount () {
    window.addEventListener('scroll', this.loadBreeds)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.loadBreeds)
  }
}
</script>

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
      position: relative;
      cursor: pointer;

      &:before {
        content: '';
        position: absolute;
        background-image: url(/static/heart.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 15px;
        width: 40px;
        height: 40px;
        right: 10px;
        top: 10px;
        transition: background-size 0.1s;
      }

      &.active {
        &:before {
          background-image: url(/static/heart-active.png);
          background-size: 25px;
        }
      }

      &.favorites-item {
        cursor: default;
        &:before {
          display: none;
        }
      }

      &:nth-child(3n + 4) {
        margin-left: 0 !important;
      }
    }

    &-item + &-item {
      margin-left: 20px;
    }
  }
</style>
