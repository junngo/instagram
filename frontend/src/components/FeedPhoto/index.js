import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as UserActions } from "redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPhotoLikes: () => {
      dispatch(UserActions.getPhotoLikes(ownProps.id));
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);
