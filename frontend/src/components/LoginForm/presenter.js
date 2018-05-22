import React from "react";
import Ionicon from "react-ionicons";
import formStyles from "shared/formStyles.scss";

const LoginForm = props => (
  <div className={formStyles.formComponent}>
    <form className={formStyles.form}>
      <input type="text" placeholder="Username" className={formStyles.textInput} />
      <input
        type="password"
        placeholder="Password"
        className={formStyles.textInput}
      />
      <input type="submit" value="Log in" className={formStyles.button} />
    </form>
    <span className={formStyles.divider}>or</span>
    <span className={formStyles.facebookLink}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" /> Log in
      with Facebook
    </span>
    <span className={formStyles.forgotLink}>Forgot password?</span>
  </div>
);

export default LoginForm;
