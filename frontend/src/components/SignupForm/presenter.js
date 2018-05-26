import React from "react";
import PropTypes from "prop-types";
//import Ionicon from "react-ionicons";
import FacebookLogin from "react-facebook-login";
import formStyles from "shared/formStyles.scss";

const SignupForm = props => (
  <div className={formStyles.formComponent}>
    <h3 className={formStyles.signupHeader}>
      Sign up to see photos and videos from your friends.
    </h3>
    <FacebookLogin
      appId="368863656953457"
      autoLoad={true}
      fields="name, email, picture"
      callback={props.handleFacebookLogin}
      cssClass={formStyles.facebookLink}
      icon="fa-facebook-official"
      textButton={"Log in with Facebook"}
    />
    <span className={formStyles.divider}>or</span>
    <form className={formStyles.form} onSubmit={props.handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        className={formStyles.textInput}
        onChange={props.handleInputChange}
        name="email"
      />
      <input
        type="text"
        placeholder="Full Name"
        className={formStyles.textInput}
        onChange={props.handleInputChange}
        name="fullname"
      />
      <input
        type="username"
        placeholder="Username"
        className={formStyles.textInput}
        onChange={props.handleInputChange}
        name="username"
      />
      <input
        type="password"
        placeholder="Password"
        className={formStyles.textInput}
        onChange={props.handleInputChange}
        name="password"
      />
      <input
        type="submit"
        value="Sign up"
        className={formStyles.button}
      />
    </form>
    <p className={formStyles.terms}>
      By signing up, you agree to our <span>Terms & Privacy Policy</span>.
    </p>
  </div>
);

SignupForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFacebookLogin: PropTypes.func.isRequired
};

export default SignupForm;
