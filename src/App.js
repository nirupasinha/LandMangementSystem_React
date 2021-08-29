import React from 'react';
import AuthControl from "./components/Auth/AuthControl"
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
//  const { condition } = this.state;
 return (
   <AuthControl/>
 )
}

}

export default App;
