import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      count:0,
      num:2
  },
  mutations: {
    add(state){
      state.count++;
  },
  reduce(state){
      state.count--;
  }
  },
  getters:{
    sum(state){
      return state.count*state.num;
    }
  },
  actions: {

  }
})
