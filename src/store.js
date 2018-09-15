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
    activeBreed: '',
    favoriteBreeds: []
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

    addFavorites(state, payload) {
      state.favoriteBreeds.push(payload)
    }
  },

  actions: {
    getBreedsNames(context){
      return axios({
        method:'get',
        url: apiUrls.breedsNames()
      })
    },

    getBreeds(context, infinite = false){
      let url = context.state.activeBreed ? apiUrls.breedsByBreed(context.state.activeBreed) : apiUrls.breedsRandom();

      return axios({
        method:'get',
        url: url
      })
      .then((res)=>{
        if (!infinite) {
          context.commit('clearBreeds');
        }

        context.commit('addBreeds', res.data.message);
      })
    },
  }
})
