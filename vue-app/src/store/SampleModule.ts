export const SampleModule = {
  state: {
    text: ''
  },

  getters: {
    text (state: any) {
      return state.text
    },
  },

  mutations: {
    setText (state: any , text: string) {
      state.text = text
    },
  },

  actions: {
    logText () {
      console.log('-- logText --');
    }
  }
}

export const getters = {
  text: SampleModule.getters.text
};
