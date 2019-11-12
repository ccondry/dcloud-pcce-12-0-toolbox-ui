import Vue from 'vue'
import Vuex from 'vuex'
import pkg from 'package'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import modules from './modules'

Vue.use(Vuex)

const isProduction = process.env.NODE_ENV === 'production'

const store = new Vuex.Store({
  // strict mode in development only
  strict: !isProduction,
  actions,
  getters,
  modules,
  state: {
    demoConfigId: 'pcce-12-0',
    isProduction,
    pkg,
    working: {
      admin: {},
      app: {},
      images: {},
      cce: {},
      cvp: {},
      duo: {},
      facebook: {},
      finesse: {},
      templates: {},
      user: {},
      session: {},
      upstream: {}
    },
    loading: {
      admin: {},
      app: {},
      images: {},
      cce: {},
      cvp: {},
      duo: {},
      facebook: {},
      finesse: {},
      templates: {},
      user: {},
      session: {},
      upstream: {}
    }
  },
  mutations
})

export default store
