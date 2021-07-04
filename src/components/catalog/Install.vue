<template>
  <div class="install">
    <input
        class="install__input"
        id="checkbox"
        type="checkbox"
        v-on:change="changeInput"
    >
    <img class="install__img"
         src="../../assets/img/install.png"
         height="50" width="50" alt="install">
    <div class="install__text">
      <h3 class="install__h3">Установка</h3>
      <span class="install__description">Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.</span>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Install",
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {
    ...mapActions(['IS_CHECKED']),
    changeInput() {
      this.IS_CHECKED()
    }
  },
}
</script>

