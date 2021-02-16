import { createStore } from "vuex";

export default createStore({
  state: {
    message: "Fint App",
  },
  getters: {
    getMessage: (state) => state.message,
  },
  mutations: {},
  actions: {},
  modules: {},
});
