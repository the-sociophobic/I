import React, { useMemo } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import useStore from '../../hooks/useStore'
import useUser from '../../hooks/useUser'
import Loader from '../Loader'
import routes from './routes'


const ProtectedRoutes: React.FC = () => {
  const { data: user, isLoading: loadingUser } = useUser()

  const router = useMemo(
    () => createBrowserRouter(routes)
    , [user]
  )

  useStore.setState({ user })

  if (loadingUser)
    return <Loader />

  return <RouterProvider router={router} />
}


export default ProtectedRoutes
