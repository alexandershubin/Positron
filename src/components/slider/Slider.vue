<template>
  <div class="slider">
    <div class="slider__top">
      <h3 class="slider__h3">Просмотренные товары</h3>
    </div>
    <swiper
        navigation
        :breakpoints="swiperOptions.breakpoints"
        :pagination="swiperOptions.pagination"
        :scrollbar="{ draggable: true }"
    >
      <swiper-slide v-for="slide in SLIDERS"
                    :key="slide.title"
      >
        <div class="slider__item">
          <img class="slider__img"
               width="245"
               height="245"
               :src="require('../../assets/img/' + slide.image)"
               alt="slider"/>
          <h4 class="slider__h4">{{ slide.title }}</h4>
          <p class="slider__description">{{ slide.description }}</p>
          <p class="slider__price-rub">6 848 ₽ - 56 548 ₽</p>
          <span class="slider__price-eur">77.60 € – 643.86 €</span>
          <a href="#" class="btn btn__blue btn__blue--slider">Подробнее</a>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {Swiper, SwiperSlide} from 'swiper/vue';
import SwiperCore, {A11y, Navigation, Pagination, Scrollbar} from 'swiper';
import 'swiper/swiper.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default {
  name: "Slider",
  components: {
    Swiper,
    SwiperSlide
  },
  props: {},
  data() {
    return {
      index: 1,
      swiperOptions: {
        breakpoints: {
          1200: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          540: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        },
        pagination: {
          dynamicBullets: true,
          type: 'fraction',
          renderFraction: (currentClass, totalClass) => {
            return `<span class="${currentClass}"></span>
                   / <span class="${totalClass}"></span>`
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  computed: {
    ...mapGetters(['SLIDERS']),
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  methods: {
    ...mapActions(['GET_LOAD_SLIDER']),
  },
  mounted() {
    this.GET_LOAD_SLIDER()
  }
}
</script>
