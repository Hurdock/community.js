import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Pages
import NoMatch from './views/404'
import Home from './views/Home'
import Login from './views/Login'

let App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth/login" exact component={Login} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  )
}

export default App;
