import { createStore } from 'vuex'
import Client from '@/api/Client';

export default createStore({
  state: {
    blockOnPass: null
  },
  getters: {
    blockOnPass(state) {
      return state.blockOnPass
    }
  },
  mutations: {
    updateBlockOnPass(state, block) {
      state.blockOnPass = block
    }
  },
  actions: {
    async getBlock({ commit }) {
      const client = new Client()
      client.getBlock()
        .then(res => {
          if (res.ok) {
            res.json().then(r => commit('updateBlockOnPass', r))
          }
        })
    }
  },
  modules: {
  }
})
