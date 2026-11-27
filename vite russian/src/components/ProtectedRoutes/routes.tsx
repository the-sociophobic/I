import { ReactNode } from 'react'

import Main from '../../pages/Main'
import Trousers from '../../pages/Trousers'
import Korneplod from '../../pages/Korneplod'
import Call from '../../pages/Call'
import RedirectToMain from '../../pages/RedirectToMain'


export type RouteType = {
  path: string
  title: string
  element: ReactNode
  exact?: boolean
}


const routes: RouteType[] = [
  {
    path: '/',
    title: 'Старт',
    element: <Main />,
  },
  {
    path: '/штаны',
    title: 'Штаны',
    element: <Trousers />,
  },
  {
    path: '/корнеплод',
    title: 'Корнеплод',
    element: <Korneplod />,
  },
  {
    path: '/созвон',
    title: 'Созвон',
    element: <Call />,
  },
  {
    path: '/*',
    title: 'Старт',
    element: <RedirectToMain />,
  },
]


export default routes
