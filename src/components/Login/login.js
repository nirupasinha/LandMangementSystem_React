
import React from 'react';
import './login.css';
import service from "../../services/axiosRequest"
class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password:""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitData = this.submitData.bind(this);

  };

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
 
  }

  async submitData(event) {
    event.preventDefault()

    const data = await service.login(this.state);
    console.log("===========================data ",data)
    localStorage.setItem('authToken', JSON.stringify(data.result.data));

  }
  render() {
      return (
        <form onSubmit={this.submitData}>
        <label>
          Email:
          <input
            name="email"
            type="email"
            // value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label><br />
        <label>
          Password:
          <input
            name="password"
            type="password"
            // value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label><br />
        <button type="submit">Login</button>
      </form>
     
    );
  

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

