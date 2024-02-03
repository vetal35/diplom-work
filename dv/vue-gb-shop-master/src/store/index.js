import { createStore } from "vuex";
import Cart from "./cart";
import axios from "axios";

export default createStore({
  state: { products: [], oneProduct: [] },
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    setOneProduct: (state, product) => {
      state.oneProduct = product;
    },
  },
  actions: {
    loadProducts({ commit }) {
      axios({
        method: "GET",
        url: `/api/v1/catalog`,
        params: {
          //user_key_id: "USER_KEY_ID",
        },
        data: {},
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          commit("setProducts", response.data);
          //console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loadingDataApi = false;
        });
    },
    loadOneProduct({ commit }, id) {
      axios({
        method: "GET",
        url: `/api/v1/product/${id}`,
        params: {
          //user_key_id: "USER_KEY_ID",
        },
        data: {},
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          commit("setOneProduct", response.data);
          // console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    },
  },
  getters: {
    getProducts: (state) => [...state.products],
    getOneProduct: (state) => state.oneProduct,
  },
  modules: { Cart },
});
