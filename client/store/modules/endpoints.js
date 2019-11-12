const isProduction = process.env.NODE_ENV === 'production'

let authUrlBase = '/api/v1/auth'
let urlBase = '/api/v1/pcce-12-0'
if (!isProduction) {
  authUrlBase = 'http://localhost:3032/api/v1/auth'
  urlBase = 'http://localhost:3053/api/v1/pcce-12-0'
}

const endpoints = {
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
  provision: urlBase + '/provision',
  instances: urlBase + '/instances'
}

const state = {
  endpoints
}

const mutations = {
}

const getters = {
  endpoints: state => state.endpoints
}

const actions = {
}

export default {
  state,
  mutations,
  getters,
  actions
}