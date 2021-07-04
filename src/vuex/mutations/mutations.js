export default  {
  SET_PRODUCTS_TO_STATE: (state, products) => {
    state.products = products
  },
  REMOVE_CARD: (state, index) => {
    state.products.splice(index, 1)
  },
  REMOVE_ALL_CARD: (state) => {
    for (let item of state.products) {
      state.products.splice(item)
    }
  },
  DECREMENT_ITEM_BASKET: (state, index) => {
    if (state.products[index].counter > 1) {
      state.products[index].counter--
    }
  },
  INCREMENT_ITEM_BASKET: (state, index) => {
    state.products[index].counter++
  },
  SET_SLIDERS_TO_BASKET: (state, sliders) => {
    state.sliders = sliders
  },
  CHANGE_IS_CHECKED: (state) => {
    state.isChecked = !state.isChecked
  }
}
