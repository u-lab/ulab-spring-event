import firebase from '@/plugins/firebase'

// state
export const state = () => ({
  intro: null
})

// getters
export const getters = {
  intro: (state) => state.intro,
  check: (state) => state.intro !== null
}

// mutations
export const mutations = {
  setIntro(state, intro) {
    state.intro = intro
  }
}

// actions
export const actions = {
  async fetchIntro({ getters, commit }) {
    if (!getters.check) {
      const db = firebase.firestore()
      const collection = db.collection('intro').where('introID', '==', 1)
      const doc = await collection.get()
      const data = doc.docs[0].data()

      commit('setIntro', data)
    }
  }
}
