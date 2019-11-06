import Vue from 'vue'
import Vuex from 'vuex'
import pkg from 'package'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import modules from './modules'

Vue.use(Vuex)

const isProduction = process.env.NODE_ENV === 'production'

let authUrlBase = '/api/v1/auth'
let urlBase = '/api/v1/pcce-12-0'
if (!isProduction) {
  authUrlBase = 'http://localhost:3032/api/v1/auth'
  urlBase = 'http://localhost:3053/api/v1/pcce-12-0'
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
      login: authUrlBase + '/login',
      logout: authUrlBase + '/logout',
      admin: {
        users: authUrlBase + '/admin/users',
        user: authUrlBase + '/admin/user',
        userProvisionMap: authUrlBase + '/provision',
        su: authUrlBase + '/su'
      },
      userDemo: authUrlBase + '/user/demo',
      user: authUrlBase + '/user',
      lockUser: authUrlBase + '/lock',
      unlockUser: authUrlBase + '/unlock',
      addSupport: authUrlBase + '/add-support',
      removeSupport: authUrlBase + '/remove-support',
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
