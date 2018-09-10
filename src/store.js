import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './routes/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    breedsNames: null,
    breeds: [],
    activeBreed: null
  },

  mutations: {
    updateBreedsNames(state, payload){
      state.breedsNames = payload
    },

    addBreeds(state, payload){
      state.breeds = state.breeds.concat(...payload)
    },

    setActiveBreed(state, payload){
      state.activeBreed = payload;
    }
  },

  actions: {
    getBreedsNames(context){
      axios({
        method:'get',
        url:'https://dog.ceo/api/breeds/list/all',
      })
      .then((res)=>{
        context.commit('updateBreedsNames', res.data.message);
        context.commit('setActiveBreed', router.currentRoute.params.name);
      })
    },

    getBreeds(context){
      axios({
        method:'get',
        url:'https://dog.ceo/api/breeds/image/random/20',
      })
      .then((res)=>{
        context.commit('addBreeds', res.data.message);
      })
    }
  }
})
