<template>
  <div class="wrapper">
    <Catalog/>
    <Slider/>
  </div>
</template>

<script>
import Catalog from "./catalog/Catalog";
import Slider from "./slider/Slider";

export default {
  name: 'Wrapper',
  components: {Slider, Catalog},
  data() {
    return {}
  },
  computed: {},
}
</script>

<style lang="scss">
.wrapper {
  margin: 0 auto;
}
</style>
