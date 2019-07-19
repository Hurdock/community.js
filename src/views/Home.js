import React from 'react'
import Header from './Layouts/Header'

export default () => {
  return (
    <React.Fragment>
      <Header title="Homepage"></Header>
      <div className="container">
        <h1>Welcome to the first page.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae magni earum laboriosam maxime saepe magnam!</p>
      </div>
    </React.Fragment>      
  )
}