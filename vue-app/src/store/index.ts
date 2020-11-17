import Vue from 'vue'
import Vuex from 'vuex'
import { SampleModule } from './SampleModule'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    SampleModule,
  }
})

export default store
