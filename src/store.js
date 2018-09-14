import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './routes/router'

Vue.use(Vuex)

const apiUrls = {
  url: 'https://dog.ceo/api',
  breedsNames(){
    return this.url + '/breeds/list/all'
  },

  breedsRandom(){
    return this.url + '/breeds/image/random/20'
  },

  breedsByBreed(breed){
    return this.url + '/breed/' + breed  + '/images/random/20'
  }
}

export default new Vuex.Store({
  state: {
    breedsNames: null,
    breeds: [],
    activeBreed: ''
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

  actions: {
    getBreedsNames(context){
      return axios({
        method:'get',
        url: apiUrls.breedsNames()
      })
    },

    getBreeds(context){
      let url = context.state.activeBreed ? apiUrls.breedsByBreed(context.state.activeBreed) : apiUrls.breedsRandom();

      return axios({
        method:'get',
        url: url
      })
      .then((res)=>{
        context.commit('clearBreeds');
        context.commit('addBreeds', res.data.message);
      })
    },

    getBreedsByFilter(context, breed){

    }
  }
})
