<template>
  <div id="app" class="container">
    <nav>
      <ul class="menu">
        <li class="menu-item">
          <router-link to="/" class="menu-item-link">Главная</router-link>
        </li>
        <li class="menu-item">
          <breeds-control></breeds-control>
        </li>
        <li class="menu-item">
          <router-link to="/favorites" class="menu-item-link">Избранное {{totalFavorites}} </router-link>
        </li>
      </ul>
    </nav>
    <transition  name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

import BreedsControl from './components/controls/BreedsControl'

export default {
  computed: {
    totalFavorites () {
      return this.$store.state.favoriteBreeds.length || ''
    }
  },
  components: {
    BreedsControl
  },
  created () {
    this.$store.dispatch('fillFavorites')
  }
}
</script>

<style lang="scss">
  body{
    font-family: Tahoma, Arial, sans-serif;
    line-height: 1.3;
    display: flex;
    justify-content: center;
  }

  .container {
    width: 1000px;
  }

  .menu {
    display: flex;
    padding: 0;
    list-style-type: none;
    border: 1px solid #CCC;

    &-item {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;

      &-link {
        display: block;
        padding: 10px;
        text-decoration: none;
        text-align: center;
        width: 100%;
        color: #333;

        &:hover {
          background-color: #eaeaea;
        }
      }

      &-select {
        width: 100%;
        background-color: #FFF;
      }
    }

    &-item + &-item {
      border-left: 1px solid #CCC;
    }

    .router-link-exact-active {
      background-color: #EAEAEA;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
