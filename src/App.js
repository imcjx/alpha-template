import React, { Component } from 'react'
import { Switch, withRouter } from "react-router-dom";
import FrontendAuth from "./router/FrontendAuth";
import MainTabBar from './components/MainTabBar'
import './App.css'

class App extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const {pathname} = this.props.history.location;
    return (
      <div>
          <Switch>
            <FrontendAuth></FrontendAuth>
          </Switch>
          {pathname.indexOf('main') == -1 ? '' : <MainTabBar/>}
      </div>
    )
  }
}

export default withRouter(App)
