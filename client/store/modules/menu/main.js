import lazyLoading from './lazyLoading'

const path = '/pcce-12-0/main'

export default {
  name: 'Main',
  meta: {
    icon: 'folder',
    iconExpanded: 'folder-open',
    expanded: false
  },
  children: [
    {
      name: 'Home',
      path: path + '/home',
      meta: {
        icon: 'home',
        description: 'home'
      },
      component: lazyLoading('main/home')
    },
    {
      name: 'Certificates',
      path: path + '/certificates',
      meta: {
        icon: 'certificate',
        description: 'CA Certificates'
      },
      component: lazyLoading('main/certificates')
    },
    {
      name: 'Customers',
      path: path + '/customers',
      meta: {
        icon: 'account-card-details',
        description: 'Customers (User Routing Configuration)'
      },
      component: lazyLoading('main/customers')
    },
    {
      name: 'CCE Web Admin',
      path: path + '/cce-web-admin',
      meta: {
        icon: 'account-edit',
        label: 'CCE Web Admin',
        description: 'CCE Web Administrator UI'
      },
      component: lazyLoading('main/cce-web-admin')
    },
    {
      name: 'CUIC',
      path: path + '/cuic',
      meta: {
        icon: 'chart-bar',
        description: 'CUIC Demo'
        // created: '2019-1-30',
        // modified: '2019-1-30'
      },
      component: lazyLoading('main/cuic')
    }
  ]
}
