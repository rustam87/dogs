<template>
  <div id="app" class="container">
    <nav>
      <ul class="menu">
        <li class="menu-item">
          <router-link to="/" class="menu-item-link">Главная</router-link>
        </li>
        <li class="menu-item">
          beeds
        </li>
        <li class="menu-item">
          <router-link to="/favorites" class="menu-item-link">Избранное</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import BreedsControl from './components/BreedsControl'

export default {
  name: 'App',
  components: {
    BreedsControl
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
  }
</style>
