import axios from "axios";

export default {
  GET_PRODUCTS({commit}) {
    return axios('http://localhost:3000/products', {
      method: "GET"
    })
    .then((products) => {
      commit('SET_PRODUCTS_TO_STATE', products.data)
      return products
    })
    .catch((error) => {
      console.error('Что-то пошло не так :(');
      return error;
    })
  },
  GET_LOAD_SLIDER({commit}) {
    return axios('http://localhost:3000/sliders', {
      method: "GET"
    })
    .then((sliders) => {
      commit('SET_SLIDERS_TO_BASKET', sliders.data)
      return sliders
    })
    .catch((error) => {
      console.error('Что-то пошло не так :(');
      return error;
    })
  },
  ORDER_PRODUCTS({state}) {
    const orderedProducts = state.products;
    const install = state.isChecked;
    return axios('http://localhost:3000/orders', {
      method: "POST",
      data: {
        productsIds: orderedProducts.map(product => product.id),
        itemPriceProducts: orderedProducts.map(product => product.price * product.counter),
        totalPriceProducts: orderedProducts.reduce((result, product) => result + (product.price * product.counter), 0),
        install
      }
    })
    .catch((error) => {
      console.error('Что-то пошло не так :(');
      return error;
    })
  }
}
