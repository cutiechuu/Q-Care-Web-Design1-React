import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import UserRegistration from './views/user-registration'
import Home1 from './views/home1'
import Records from './views/records'
import Calq from './views/calq'
import LandingPage from './views/landing-page'
import UserLogin from './views/user-login'
import REG from './views/reg'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/home" />
        <Route component={UserRegistration} exact path="/user-registration" />
        <Route component={Home1} exact path="/home1" />
        <Route component={Records} exact path="/records" />
        <Route component={Calq} exact path="/calq" />
        <Route component={LandingPage} exact path="/" />
        <Route component={UserLogin} exact path="/user-login" />
        <Route component={REG} exact path="/reg" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
