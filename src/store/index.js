import { createStore } from 'vuex'

export default createStore({
  state: {
    cont: 90,
    tasks: [],
    task: {
      id: '',
      name: '',
      categories: [],
      status: '',
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
    },
    delete(state,payload){
      state.tasks = state.tasks.filter(item => item.id !== payload)
    },// voy a filtrar todos los elementos distintos al id=payload que le envio
    task(state,payload){
      state.task = state.tasks.find(item => item.id === payload)
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
    },
    deleteTask({commit},id){
      commit('delete',id)
    },
    setingTask({commit},id){
      commit('task',id)

    }

  },
  modules: {
  }
})
