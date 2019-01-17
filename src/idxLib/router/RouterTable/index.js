import * as errPages from '../../components/errPages'

const errTable = [
  {
    path: '/error/401',
    name: 'Err401',
    component: errPages.Err401
  },
  {
    path: '/error/403',
    name: 'Err403',
    component: errPages.Err403
  },
  {
    path: '/error/404',
    name: 'Err404',
    component: errPages.Err404
  },
  {
    path: '/error/500',
    name: 'Err500',
    component: errPages.Err500
  },
  {
    path: '/error/502',
    name: 'Err502',
    component: errPages.Err502
  }
]

const idxRouterTable = errTable

export default idxRouterTable
