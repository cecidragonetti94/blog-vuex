import { createStore } from 'vuex'
import router from '../router'

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
    load(state, payload) {
      state.tasks = payload
    },
    incrementar(state, payload) {
      state.cont += payload
    },
    disminuir(state, payload) {
      state.cont -= payload
    },
    set(state, payload) {
      state.tasks.push(payload)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    delete(state, payload) {
      // voy a filtrar todos los elementos distintos al id=payload que le envio
      state.tasks = state.tasks.filter(item => item.id !== payload)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },

    task(state, payload) {
      if (!state.tasks.find(item => item.id === payload)) {
        router.push('/form')
        return
      } state.task = state.tasks.find(item => item.id === payload)
    },
    update(state, payload) {
      state.tasks = state.tasks.map(item => item.id === payload.id ? payload : item)
      router.push('/form')
      localStorage.setItem('tasks', JSON.stringify(state.tasks))

    }
  },
  actions: {
    loadLocalStorage({ commit }) {
      if (localStorage.getItem('tasks')) {
        const tareas = JSON.parse(localStorage.getItem('tasks'))
        commit('load', tareas)
        return
      }
      localStorage.setItem('tasks', JSON.stringify([]))
    },
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
    setTask({ commit }, task) {
      commit('set', task)
    },
    deleteTask({ commit }, id) {
      commit('delete', id)
    },
    setingTask({ commit }, id) {
      commit('task', id)

    },
    updateTask({ commit }, task) {
      commit('update', task)
    }

  },
  modules: {
  }
})
