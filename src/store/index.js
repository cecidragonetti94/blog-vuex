import { createStore } from 'vuex'

export default createStore({
  state: {
    cont: 90,
    tasks: [],
    task: {
      id: '',
      name: "",
      categories: [],
      status: "",
      number: 0,
    }
  },
  mutations: {
    incrementar(state, payload) {
      state.cont += payload
    },
    disminuir(state, payload) {
      state.cont -= payload
    },
    set(state,payload){
      state.tasks.push(payload)
    }
  },
  actions: {
    actionIncrement({ commit }) {
      commit('incrementar', 10)
    },
    actionDismi({ commit }, num) {
      commit('disminuir', num)
    },
    actionButon({ commit }, objeto) {
      if (objeto.estado) {
        commit('incrementar', objeto.num)
      } else {
        commit('disminuir', objeto.num)
      }
    },
    setTask({commit},task){
      commit('set',task)
    }

  },
  modules: {
  }
})
