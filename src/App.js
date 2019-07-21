import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { updateAccount } from './store/actions_creators';
import Axios from './utils/axios';

// Pages
import NoMatch from './views/404'
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'

class App extends React.Component {
  constructor(props) {
    super(props);
    if (localStorage.getItem('loggedIn')) {
      Axios.get('/auth/resume')
        .then((res) => props.updateAccount(res.data.profile))
        .catch((err) => localStorage.removeItem('loggedIn'));
    }
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth/login" exact component={Login} />
          <Route path="/auth/register" exact component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    )
  }
}

const mapDispatchToProps = dispatch => {
	return {
		updateAccount: (data) => {
			dispatch(updateAccount(data))
		}
	};
};

export default connect(null, mapDispatchToProps)(App);