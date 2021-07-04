export default {
  REMOVE_CARD_FROM_LIST({commit}) {
    commit('REMOVE_CARD')
  },
  REMOVE_ALL_CARD_FROM_LIST({commit}) {
    commit('REMOVE_ALL_CARD')
  },
  DECREMENT_ITEM({commit}, index) {
    commit('DECREMENT_ITEM_BASKET', index)
  },
  INCREMENT_ITEM({commit}, index) {
    commit('INCREMENT_ITEM_BASKET', index)
  },
  IS_CHECKED({commit}) {
    commit('CHANGE_IS_CHECKED')
  }
}
