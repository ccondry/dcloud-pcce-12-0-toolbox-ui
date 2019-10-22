import lazyLoading from './lazyLoading'

const path = '/pcce-12-0/admin'

export default {
  name: 'Admin',
  meta: {
    icon: 'folder',
    iconExpanded: 'folder-open',
    expanded: false
  },
  children: [
    {
      name: 'Users',
      path: path + '/users',
      meta: {
        icon: 'account-multiple',
        description: 'users'
      },
      component: lazyLoading('admin/users')
    }
  ]
}
