
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
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
 
  }

  async submitData(event) {
    event.preventDefault()

    const data =await service.login(this.state);
    // console("===========================data ",data)
    localStorage.setItem('userData', JSON.stringify(data.result.data));
    console.log("data here ",data)

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
        <button type="submit">Submit</button>
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

