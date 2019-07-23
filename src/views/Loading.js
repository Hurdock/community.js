import React from 'react';

export default (props) => {
  return props.waiting === true ? (
     <div className="d-flex justify-content-center align-items-center mt-2 mt-lg-5 p-2 p-lg-5">
       <img className="img-fluid" alt="Loading" src="./images/loading.gif"></img>
    </div>
  ) : (<React.Fragment>{props.children}</React.Fragment>)
}