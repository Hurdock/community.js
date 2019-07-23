import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { GuestRoute, AdminRoute } from '../utils/specificRoutes';

// Pages
import NoMatch from './Pages/404'
import Home from './Pages/Home'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import AddNews from './Pages/News/Create'

const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <GuestRoute path="/auth/login" exact component={Login} account={props.account} />
        <GuestRoute path="/auth/register" exact component={Register} account={props.account}  />
        <AdminRoute path="/add-news" exact component={AddNews} account={props.account}  />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  )
}

export default App;