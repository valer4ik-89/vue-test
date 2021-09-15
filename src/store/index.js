import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
    image: {}
  },
  getters: {
    images(state) {
      return state.images;
    },
    image(state) {
      return state.image;
    }
  },
  mutations: {
    SET_IMAGES(state, images) {
      state.images = images;
    },
    SET_IMAGE(state, image) {
      state.image = image;
    },
    CLEAR_IMAGE(state) {
      state.image = {};
    }
  },
  actions: {
    async fetchImages({ commit }) {
      try {
        const responce = await axios.get(
          `https://pixabay.com/api/?key=${process.env.VUE_APP_PIXABAY_KEY}&q=cats&image_type=all&per_page=100`
        );
        const images = responce.data.hits;
        commit("SET_IMAGES", images);
      } catch (e) {
        console.log("error", e);
      }
    },
    async fetchImageById({ commit }, id) {
      try {
        const responce = await axios.get(
          `https://pixabay.com/api/?key=${process.env.VUE_APP_PIXABAY_KEY}&id=${id}`
        );
        const image = responce.data.hits[0];
        commit("SET_IMAGE", image);
      } catch (e) {
        console.log("error", e);
      }
    }
  }
});
