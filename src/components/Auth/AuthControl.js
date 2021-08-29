import React from 'react';
import reactDom from 'react-dom';
import {LoginButton,SignUpButton} from "./Auth" 
import Greeting from "./Greeting"
import Home from "../Home/HomePage"

class AuthControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = localStorage.getItem('authToken');
      let button;
      if (isLoggedIn) {
        button = <Home/>;
      } else {
        button = <LoginButton />;
      }
  
      return (
        <div>
          {button}
        </div>
      );
    }
  }
  
  reactDom.render(
    <AuthControl />,
    document.getElementById('root')
  );

  export default AuthControl