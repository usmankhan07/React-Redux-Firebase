import React, { Component } from 'react'

class CreateProject extends Component {
    state = {
        title: null,
        content: null
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
        <div className = "createprojectform-content container">
        <form  onSubmit = {this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3 center">
                Cretae New Project
            </h5>
            <div className="input-field">
                <label htmlFor = "title">Title</label>
                <input type = "text" id = "title" onChange = {this.handleChange}></input>
            </div>
            <div className="input-field">
                <label htmlFor = "content">Password</label>
                <input type = "text" id = "content"  onChange = {this.handleChange}></input>
            </div>
            <div className="input-field center">
                <button class="waves-effect waves-light btn">Create</button>
            </div>
        </form>
      </div>
    )
  }
}

export default CreateProject
