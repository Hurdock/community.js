import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { updateAccount } from './store/actions_creators';
import Axios from './utils/axios';
import { GuestRoute, AdminRoute } from './utils/specificRoutes';

// Pages
import NoMatch from './views/404'
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import AddNews from './views/AddNews'

const App = (props) => {

  useEffect(() => {
    if (localStorage.getItem('loggedIn')) {
      Axios.get('/auth/resume')
        .then((res) => props.updateAccount(res.data))
        .catch(() => localStorage.removeItem('loggedIn'));
    }
  }, []);

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

const mapStateToProps = state => {
  return {
    account: state.account
  }
}

const mapDispatchToProps = dispatch => {
	return {
		updateAccount: (data) => {
			dispatch(updateAccount(data))
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);