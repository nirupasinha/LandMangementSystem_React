
import React from 'react';
import service from "../../services/axiosRequest"
class Signup extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      name: "",
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

    const data =await service.signup(this.state);
    localStorage.setItem('userData', JSON.stringify(data.result.data));
    return;
  }
  render() {
      return (
        <form onSubmit={this.submitData}>
        <label>
          Name :
          <input
            name="name"
            type="text"
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input
            name="email"
            type="email"
            onChange={this.handleInputChange} />
        </label><br />
        <label>
          Password:
          <input
            name="password"
            type="password"
            onChange={this.handleInputChange} />
        </label><br />
        <button type="submit">Submit</button>
      </form>
     
    );
  }

}

export default Signup

