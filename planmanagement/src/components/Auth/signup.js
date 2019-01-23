import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email:null,
        password:null,
        firstName:null,
        lastName:null
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        console.log(this.state);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
  render() {
    return (
      <div className = "SignUpform-content container">
        <form  onSubmit = {this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3 center">
                SignUp form
            </h5>
            <div className="input-field">
                <label htmlFor = "firstname">First Name</label>
                <input type = "text" id = "firstname"  onChange = {this.handleChange}></input>
            </div>
            <div className="input-field">
                <label htmlFor = "text">Last Name</label>
                <input type = "text" id = "lastname"  onChange = {this.handleChange}></input>
            </div>
            <div className="input-field">
                <label htmlFor = "email">Email</label>
                <input type = "email" id = "email" onChange = {this.handleChange}></input>
            </div>
            <div className="input-field">
                <label htmlFor = "password">Password</label>
                <input type = "password" id = "password"  onChange = {this.handleChange}></input>
            </div>
            <div className="input-field center">
                <button class="waves-effect waves-light btn">SignIn</button>
            </div>
        </form>
      </div>
    )
  }
}

export default SignUp
