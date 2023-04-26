import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import UserRegistration from './views/user-registration'
import Records from './views/records'
import LandingPage from './views/landing-page'
import UserLogin from './views/user-login'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/home" />
        <Route component={UserRegistration} exact path="/user-registration" />
        <Route component={Records} exact path="/records" />
        <Route component={LandingPage} exact path="/" />
        <Route component={UserLogin} exact path="/user-login" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
