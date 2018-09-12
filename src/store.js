import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './routes/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    breedsNames: null,
    breeds: [],
    activeBreed: '',
    filterBy: null,
    isEnableFilter: false
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

    clearActiveBreed(state){
      state.activeBreed = '';
    },

    clearBreeds(state) {
      state.breeds = []
    },

    enableFilter(state){
      state.isEnableFilter = true
    },

    disableFilter(state){
      state.isEnableFilter = false
    },

    setFilter(state, payload) {
      state.filterBy = payload;
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
        url: context.getters.apiUrl + 'breeds/list/all'
      })
      .then((res)=>{
        context.commit('updateBreedsNames', res.data.message);
        context.commit('setActiveBreed', router.currentRoute.params.name);
      })
    },

    getBreeds(context){
      let url = context.getters.apiUrl + 'breeds/image/random/20'

      if (context.state.isEnableFilter) {
        url = context.getters.apiUrl + 'breed/' + context.state.filterBy  + '/images/random/20'
      }

      axios({
        method:'get',
        url
      })
      .then((res)=>{
        context.commit('addBreeds', res.data.message);
      })
    },

    getBreedsByFilter(context, breed){
      let url

      if (breed) {
        url = context.getters.apiUrl + 'breed/' + breed  + '/images/random/20'
        context.commit('enableFilter');
        context.commit('setFilter', breed);
      } else {
        url = context.getters.apiUrl + 'breeds/image/random/20'
        context.commit('disableFilter');
      }

      axios({
        method:'get',
        url
      })
      .then((res)=>{
        context.commit('clearBreeds');
        context.commit('addBreeds', res.data.message);
      })
    }
  }
})
