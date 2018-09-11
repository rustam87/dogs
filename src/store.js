import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './routes/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    breedsNames: null,
    breeds: [],
    activeBreed: null,
    isNeedFilter: false
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
    },

    cleerBreeds(state) {
      state.breeds = []
    }
  },

  getters: {
    apiUrl(){
      return 'https://dog.ceo/api/'
    }
  },

  actions: {
    getBreedsNames(context){
      axios({
        method:'get',
        url: context.getters.apiUrl + 'breeds/list/all',
      })
      .then((res)=>{
        context.commit('updateBreedsNames', res.data.message);
        context.commit('setActiveBreed', router.currentRoute.params.name);
      })
    },

    getBreeds(context, byBreed){
      let path = this.isNeedFilter ? 'breed' + byBreed  + '/images' : 'breeds/image/random/20'

      axios({
        method:'get',
        url: context.getters.apiUrl + path,
      })
      .then((res)=>{
        context.commit('addBreeds', res.data.message);
      })
    }
  }
})
