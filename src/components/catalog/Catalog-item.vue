<template>
  <div class="catalog-item">
    <img class="catalog-item__img" width="100" height="100"
         :src=" require('../../assets/img/' + product_data.image)" alt="product">
    <div class="catalog-item__info">
      <p class="catalog-item__name">{{ product_data.name }}</p>
      <p class="catalog-item__description">{{ product_data.description }}</p>
      <p class="catalog-item__article">Артикул: {{ product_data.article }}</p>
    </div>
    <div class="counter">
      <div class="counter__wrapper">
        <span class="counter__decrement" @click="decrement">&mdash;</span>
        <span class="counter__number">{{ product_data.counter }}</span>
        <span class="counter__increment" @click="increment">+</span>
      </div>
      <div class="counter__price">{{ showPrice }}</div>
    </div>
    <span class="catalog-item__price">{{ product_data.price * product_data.counter }} ₽</span>
    <span class="catalog-item__closed"
          @click="dltCard"></span>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "Catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    ...mapGetters(['TOTAL_COUNT']),
    showPrice() {
      let result = 0
      if (this.product_data.counter > 1) {
        result = `${this.product_data.price} ₽/шт`
      } else {
        return null;
      }
      return result;
    }
  },
  methods: {
    dltCard() {
      this.$emit('dltCard')
    },
    decrement() {
      this.$emit('decrement')
    },
    increment() {
      this.$emit('increment')
    }
  }
}
</script>

