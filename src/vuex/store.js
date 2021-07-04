import {createStore} from 'vuex';
import state from "./state/state";
import mutations from "./mutations/mutations";
import action from "./actions/actions";
import apiRequest from "./actions/action-request"
import getters from "./getters/getters";

const actions = {...action, ...apiRequest}
const store = createStore({
  state,
  mutations,
  actions,
  getters
});

export default store;
