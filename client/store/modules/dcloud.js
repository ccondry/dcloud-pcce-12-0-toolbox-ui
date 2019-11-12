import * as types from '../mutation-types'

const isProduction = process.env.NODE_ENV === 'production'

// pick the localhost instance if running in development mode
const instanceName = isProduction ? 'RTP-1' : 'DEV-1'

const state = {
  session: null,
  instances: [],
  instanceName
  // instance: {}
}

const mutations = {
  [types.SET_DCLOUD_SESSION] (state, data) {
    state.session = data
  },
  [types.SET_INSTANCES] (state, data) {
    state.instances = data
  }
}

const getters = {
  dcloudSession: state => {
    // console.log(state.session)
    return state.session || {}
  },
  sessionId: (state, getters) => getters.dcloudSession.sessionId,
  datacenter: (state, getters) => getters.dcloudSession.datacenter,
  brandDemoLink (state, getters) {
    return `https://mm-brand.cxdemo.net?session=${getters.sessionId}&datacenter=${getters.datacenter}&userId=${getters.user.id}`
  },
  cumulusDemoLink (state, getters) {
    return `https://mm.cxdemo.net?session=${getters.sessionId}&datacenter=${getters.datacenter}&userId=${getters.user.id}`
  },
  // all available instances
  instances: state => state.instances,
  // instance name, like RTP-1
  instanceName: state => state.instanceName,
  // full demo instance object
  instance: (state, getters) => {
    try {
      // get datacenter and instance ID
      const parts = getters.instanceName.split('-')
      console.log('parts', parts)
      // find this instance in the array of all availalble PCCE 12 instances
      const obj = getters.instances.find(v => {
        return v.datacenter === parts[0] && String(v.id) === parts[1]
      })
      console.log('instance is', obj)
      return obj || null
    } catch (e) {
      return null
    }
  }
}

const actions = {
  async getDcloudSession ({getters, commit, dispatch}, showNotification = true) {
    console.log('getDcloudSession...')
    dispatch('setLoading', {group: 'app', type: 'session', value: true})
    try {
      await dispatch('loadToState', {
        name: 'dcloud session info',
        endpoint: getters.endpoints.session,
        mutation: types.SET_DCLOUD_SESSION,
        showNotification
      })
    } catch (e) {
      console.error('error loading dcloud session info', e)
    } finally {
      dispatch('setLoading', {group: 'app', type: 'session', value: false})
    }
  },
  async getInstances ({getters, commit, dispatch}, showNotification = false) {
    console.log('getInstances...')
    dispatch('setLoading', {group: 'app', type: 'instances', value: true})
    try {
      await dispatch('loadToState', {
        name: 'pcce 12 instances',
        endpoint: getters.endpoints.instances,
        query: {
          demo: 'pcce',
          version: '12.0v1'
        },
        mutation: types.SET_INSTANCES,
        showNotification
      })
    } catch (e) {
      console.error('failed to get instances:', e.message)
      throw e
    } finally {
      dispatch('setLoading', {group: 'app', type: 'instances', value: false})
    }
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
