import Main from '../../pages/Main'
import Trousers from '../../pages/Trousers'


export type RouteType = {
  to: string
  Comp: React.FC
}


const routes: RouteType[] = [
  {
    to: '/штаны',
    Comp: Trousers
  },
  {
    to: '/',
    Comp: Main
  },
]


export default routes
