<template>
  <div class="basket-top">
    <img class="basket-top__img"
         width="32" height="32"
         src="../../assets/img/basket.svg" alt="basket">
    <div class="basket-top__info">
      <h4 class="basket-top__h4">Ваша корзина</h4>
      <span class="basket-top__count">{{ PRODUCTS.length }} товара</span>
      <p class="basket-top__price">{{ TOTAL_PRICE }} ₽</p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Small-Basket",
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'TOTAL_PRICE',
      'TOTAL_COUNT',
      'CHECKED'
    ]),
  }
}
</script>

