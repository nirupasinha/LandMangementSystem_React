import logo from './logo.svg';
import './App.css';
import Login from "./components/Login/login.js"
import Signup from "./components/Signup/signup.js"
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      condition: true
    };
    this.handleClick = this.handleClick.bind(this);
}

handleClick(condition) {
  this.setState( {condition} )
}

render() {
 const { condition } = this.state;
 return (
     <div>
         <button onClick={() => this.handleClick(true)}>Login</button>
         <button onClick={() => this.handleClick(false)}>Signup</button>
         {condition === true ? <Login /> : <Signup />}
     </div>
 )
}
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>

  //     </header>
   
  //   </div>
  // );
}

export default App;
