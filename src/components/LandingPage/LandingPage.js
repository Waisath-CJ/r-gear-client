import React from 'react'
import { withRouter } from 'react-router-dom'

import Button from 'react-bootstrap/Button'

const LandingPage = props => {
  const signUp = () => {
    props.history.push('/sign-up')
  }

  const signIn = () => {
    props.history.push('/sign-in')
  }

  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <p className='banner-text'><span className='brand-name'>R Gear</span> - An e-commerce site for employee merchandise</p>
        <img
          // src={'https://images.unsplash.com/photo-1585185160068-8175b6a39d84?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80'}
          className='banner-img'
          alt={'A cup of tea with a book'}
        />
        <br /><hr />
        <Button className="my-button" block onClick={signUp}>Sign Up</Button>
        <Button className="my-button" block onClick={signIn}>Sign In</Button>
      </div>
    </div>
  )
}

export default withRouter(LandingPage)
