<template>
  <div class="favorites">
    <breeds-photos :data-provider="'favorites'"></breeds-photos>
  </div>
</template>

<script>
import BreedsPhotos from '../BreedsPhotos'
export default {
  components: {
    BreedsPhotos
  }
}
</script>
