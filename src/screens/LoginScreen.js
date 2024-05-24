import React, { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from '../SignUpScreen';
import Nav from '../Nav';
function LoginScreen() {

  const [signIn, setSignIn] = useState(false)

  const handleChange = () => {
    setSignIn(true);
  }
  return (
    <div className='loginScreen'>
        <Nav ShowBtn  signIn={signIn} handleChange={handleChange}/>
        <div className='loginScreen_background'>
        
        <div className='loginScreen_gradient'/>
        </div>
        <div className='loginScreen_body'>
          {
            signIn ? <SignUpScreen/> :
          <>
            <h1>Unlimited files, Tv programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership</h3>
          <div className='loginScreen_input'>
            <form>
              <input type='email' placeholder='Email Address'/>
              <button className='loginScreen_getStarted' onClick={handleChange}>GET STARTED</button>
            </form>
          </div>
          </>
          }
        </div>
    </div>
  )
}

export default LoginScreen;