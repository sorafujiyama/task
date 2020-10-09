import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedLists = localStorage.getItem('trello-lists')

const store = new Vuex.Store({
  state: {
    lists: savedLists? JSON.parse(savedLists): [
      {
        title:'Backlog',
        cards: [
          { body:'テスト'},
          { body:'テスト１'},
        ]
      },
      {
        title:'ToDo',
        cards: [
          { body:'テスト２'}
        ]
      },
      {
        title:'Doing',
        cards:[]
      }
    ],
  },
  mutations: {
    addlist(state,payload) {
      state.lists.push({ title: payload.title,cards:[] })
    },
    removelist(state,payload) {
      state.lists.splice(payload.listIndex,1)
    },
    addCardToList(state,payload) {
      state.lists[payload.listIndex].cards.push({ body: payload.body })
    },
    removeCardFromList(state,payload) {
      state.lists[payload.listIndex].cards.splice(payload.cardIndex, 1)
    },
    updateList(state,payload) {
      state.lists = payload.lists
    }
  },
  actions: {
    addlist(context,payload) {
      context.commit('addlist',payload)
    },
    removelist(context,payload) {
      context.commit('removelist',payload)
    },
    addCardToList(context,payload) {
      context.commit('addCardToList',payload)
    },
    removeCardFromList(context,payload) {
      context.commit('removeCardFromList',payload)
    },
    updateList(context,payload) {
      context.commit('updateList',payload)
    }
  },
  getters: {
  }
})

store.subscribe((mutation,state) => {
  localStorage.setItem('trello-lists',JSON.stringify(state.lists))
})

export default store