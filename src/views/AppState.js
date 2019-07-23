import React, { useState, useEffect } from 'react';
import App from './App';
import Axios from '../utils/axios';
import { connect } from 'react-redux';
import { updateAccount } from '../store/actions_creators';

const AppState = (props) => {

  const [loading, setLoading] = useState(localStorage.getItem('loggedIn') ? true : false);
  const updateAccount = props.updateAccount;

  useEffect(() => {
    if(loading) {
      async function fetchAccount() {
        const response = await Axios.get('/auth/resume')
        if(response) {
          updateAccount(response.data);
          setLoading(false);
        } else {
          localStorage.removeItem('loggedIn');
          setLoading(false);
        }
      }
      fetchAccount();
    }
  }, [updateAccount, loading]);
  return (loading === false ? (<App account={props.account} />) : null)
}

const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(AppState);
