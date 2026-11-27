import { Navigate } from 'react-router-dom'


const RedirectToMain = () => {
  return (
    <Navigate
      to={{
        pathname: '/',
        // search: window.location.search
      }}
      replace
    />
  )
}


export default RedirectToMain
