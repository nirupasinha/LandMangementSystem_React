
import React from 'react';
import './login.css';
class Login extends React.Component {
  constructor(props){
    super(props)
    console.log("props======",props)
  };

  handleSubmit (data){
    
    data.preventDefault();
    console.log("Data here ",data)
  }
  render() {
    console.log("This ",this)
    return (
      <form onSubmit={this.handleSubmit}>
      <div class="center">
        <label>First Name</label>
        <input></input><br></br>
        <label>Email ID</label>
        <input type="email" ></input><br></br>
        <button type="submit">
        Login
      </button>
        {/* <a class="btn">Login</a> <a class="btn">Registraion</a> */}
      </div>
      </form>
    )

  }

}
//   function  Login(){
//         return(
//             <div class="center">
//                  <label>First Name</label>
//                  <input></input><br></br>
//                  <label>Email ID</label>
//                  <input></input><br></br>
//                  <a class="btn">Login</a> <a class="btn">Registraion</a>  
//           </div>
//         )
//     }
export default Login

