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
          src={'https://thedriven.io/wp-content/uploads/2020/02/Anglo-American.jpg'}
          className='banner-img'
          alt={'Massive dump truck at a mine'}
        />
        <br /><hr />
        <Button className="my-button" block onClick={signUp}>Sign Up</Button>
        <Button className="my-button" block onClick={signIn}>Sign In</Button>
      </div>
    </div>
  )
}

export default withRouter(LandingPage)
