<template>
  <form class="form" @submit="checkForm">
    <h3 class="form__h3">Итого</h3>
    <div class="form__info">
      <div class="form__element">
        Сумма заказа
        <span class="form__span">{{ TOTAL_PRICE }} ₽</span>
      </div>
      <div class="form__element">
        Количество
        <span class="form__span">{{ TOTAL_COUNT }}</span>
      </div>
      <label class="form__element">Установка
        <span class="form__span">{{ CHECKED ? 'Да' : 'Нет' }}</span>
      </label>
    </div>
    <div class="form__total">
      Стоимость товаров
      <span class="form__price">{{ TOTAL_PRICE }} ₽</span>
    </div>
    <div class="btn-wrapper">
      <button class="btn btn__blue"
              type="submit"
              @click="showPopupOrder"
      >Оформить заказ
      </button>
      <button class="btn btn__white">Купить в 1 клик</button>
    </div>
  </form>

  <div class="overlay"
       v-if="isActive"
       @click="showPopupOrder"
  >
    <p class="overlay__p">Спасибо за заказ !</p>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Form-basket",
  components: {},
  props: {},
  data() {
    return {
      isActive: false,
    }
  },
  computed: {
    ...mapGetters(['TOTAL_PRICE', 'TOTAL_COUNT', 'CHECKED']),
  },
  methods: {
    ...mapActions(['ORDER_PRODUCTS']),
    showPopupOrder() {
      const body = document.querySelector('body');
      this.isActive = !this.isActive
      this.isActive ? body.style.overflow = 'hidden' : body.style.overflow = 'inherit'
    },
    checkForm(e) {
      e.preventDefault()
      this.ORDER_PRODUCTS()
    },
  },
}
</script>

