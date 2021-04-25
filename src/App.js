import React from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import RouteAuth from './router/RouteAuth'
import RouterConfig from './router/RouterConfig'
import MainTabBar from './components/MainTabBar'
import './App.css'

const App = (props) => {
  const { pathname } = props.history.location;
  return (
    <div>
      <Router>
        <Switch>
          <RouteAuth routerConfig={RouterConfig} />
        </Switch>
      </Router>
      {pathname.indexOf('main') == -1 ? '' : <MainTabBar />}
    </div>
  )
}

export default App;
