<template>
  <Basket/>
  <Crumbs/>
  <div class="content">
    <div class="catalog">
      <div class="basket">
        <h2 class="basket__h2">Ваша корзина</h2>
        <span class="basket__count">{{ TOTAL_COUNT }}
      {{ TOTAL_COUNT > 4 ? 'товаров' : 'товара' }}</span>
        <span class="basket__clear"
              v-on:click="dltAllCard">
        Очистить корзину
      </span>
      </div>
      <div class="catalog-list" v-if="PRODUCTS.length > 0">
        <CatalogItem
            v-for="(product, index) in PRODUCTS"
            :key="product.id"
            :product_data="product"
            @dltCard="dltCard(index)"
            @decrement="decrement(index)"
            @increment="increment(index)"
        />
      </div>
      <div v-else class="empty">Корзина пуста</div>
      <install/>
    </div>
    <FormBasket/>
  </div>
</template>

<script>
import CatalogItem from "./Catalog-item";
import {mapActions, mapGetters} from "vuex";
import Basket from "../basket/Small-basket";
import Crumbs from "../crumbs/Crumbs";
import Install from "./Install";
import FormBasket from "../basket/Form-basket";

export default {
  name: "Catalog",
  components: {FormBasket, Install, Crumbs, Basket, CatalogItem},
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'TOTAL_PRICE',
      'TOTAL_COUNT'
    ]),
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS',
      'REMOVE_CARD_FROM_LIST',
      'DECREMENT_ITEM',
      'INCREMENT_ITEM',
      'REMOVE_ALL_CARD_FROM_LIST',
    ]),
    dltCard(index) {
      this.REMOVE_CARD_FROM_LIST(index)
    },
    dltAllCard() {
      this.REMOVE_ALL_CARD_FROM_LIST()
    },
    decrement(index) {
      this.DECREMENT_ITEM(index)
    },
    increment(index) {
      this.INCREMENT_ITEM(index)
    },
  },
  mounted() {
    this.GET_PRODUCTS()
  }
}
</script>
