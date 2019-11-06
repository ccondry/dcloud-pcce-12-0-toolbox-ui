import Vue from 'vue'
import Vuex from 'vuex'
import pkg from 'package'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import modules from './modules'

Vue.use(Vuex)

const isProduction = process.env.NODE_ENV === 'production'

let urlBase = '/api/v1/auth'
if (!isProduction) {
  urlBase = 'http://localhost:3032/api/v1/auth'
}

const store = new Vuex.Store({
  // strict mode in development only
  strict: !isProduction,
  actions,
  getters,
  modules,
  state: {
    demoConfigId: 'pcce-12-0',
    isProduction,
    endpoints: {
      // add REST API endpoints here
      login: urlBase + '/login',
      logout: urlBase + '/logout',
      admin: {
        users: urlBase + '/admin/users',
        user: urlBase + '/admin/user',
        userProvisionMap: urlBase + '/provision',
        su: urlBase + '/su'
      },
      userDemo: urlBase + '/user/demo',
      user: urlBase + '/user',
      lockUser: urlBase + '/lock',
      unlockUser: urlBase + '/unlock',
      addSupport: urlBase + '/add-support',
      removeSupport: urlBase + '/remove-support',
      provision: urlBase + '/provision'
    },
    instance: 'RTP-1',
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
