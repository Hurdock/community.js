import React, { useState } from 'react';
import Header from './Layouts/Header'
import { Redirect } from 'react-router-dom';

export default () => {

  const [redirect, setRedirect ] = useState(false);
  setTimeout(() => setRedirect(true), 4000);

  return (
    <React.Fragment>
      <Header title="404 Not Found" />
      <div className="text-center">
        <h1 className="display-4">404 Not found.</h1>
        <h4 className="display-5">Go back to homepage..</h4>
        { redirect === true ? <Redirect to ="/"></Redirect> : null }
      </div>
    </React.Fragment>
  )
}