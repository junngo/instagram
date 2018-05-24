import React, { Component } from "react";
import SignupForm from "./presenter";

class Container extends Component {
  state = {
    email:"",
    fullname:"",
    username:"",
    password:""
  };

  render() {
    return (
      <SignupForm
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
      />
    );
  }

  _handleInputChange = event => {
    const { target: {value, name } } = event;
    this.setState({
      [name]: value
    });
  };

  _handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  }
}

export default Container;
