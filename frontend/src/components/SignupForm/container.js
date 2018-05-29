import React, { Component } from "react";
import PropTypes from "prop-types";
import SignupForm from "./presenter";

class Container extends Component {
  state = {
    email:"",
    fullname:"",
    username:"",
    password:""
  };

static propTypes = {
  facebookLogin: PropTypes.func.isRequired
}

  render() {
    return (
      <SignupForm
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        handleFacebookLogin={this._handleFacebookLogin}
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
  };

  _handleFacebookLogin = response => {
    const { facebookLogin } = this.props;
    facebookLogin(response.accessToken);
  };

}

export default Container;
