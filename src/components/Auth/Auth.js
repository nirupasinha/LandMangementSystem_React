import React, { useState } from 'react';
import Login from "../Login/login"
import Signup from "../Signup/signup"
function LoginButton(props) {

    return (
      <div>
      <Login />
      <SignUpButton />
      </div>

    );
  }
  
  function SignUpButton(props) {
    const [showSignup, setShowSignup] = useState(false);

    console.log("Signup clicked")
    return (
      <button onClick={() => setShowSignup(true)}>
          {showSignup ? < Signup/> : null}
        SignUp
      </button>
    );
  }

export  {LoginButton,SignUpButton}