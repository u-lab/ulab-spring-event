import firebase from '@/plugins/firebase'

// state
export const state = () => ({
  events: null
})

// getters
export const getters = {
  events: (state) => state.events,
  check: (state) => state.events !== null
}

// mutations
export const mutations = {
  setEvents(state, events) {
    state.events = events
  }
}

// actions
export const actions = {
  async fetchEvents({ getters, commit }) {
    if (!getters.check) {
      const db = firebase.firestore()
      const collection = db.collection('events')
      const docs = await collection.get()

      // 戻り値の生成
      const datas = []
      for (const doc of docs.docs) {
        const data = doc.data()
        data.id = doc.id
        datas.push(data)
      }

      commit('setEvents', datas)
    }
  }
}
