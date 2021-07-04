export default  {
  PRODUCTS(state) {
    return state.products
  },
  SLIDERS(state) {
    return state.sliders
  },
  TOTAL_PRICE(state) {
    return state.products.reduce((result, product) => result + (product.price * product.counter), 0);
  },
  TOTAL_COUNT(state) {
    return state.products.reduce((result, product) => result + product.counter, 0);
  },
  CHECKED(state) {
    return state.isChecked
  }
}
