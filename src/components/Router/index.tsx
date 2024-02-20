import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import routes from './routes'


const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        {routes.map(route =>
          <Route path={route.to}>
            <route.Comp />
          </Route>
        )}
      </Switch>
    </Router>
  )
}


export default Routes
