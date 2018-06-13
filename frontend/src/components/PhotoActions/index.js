import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as PhotoActions } from "redux/modules/photos";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleHeartClick: () => {
      if (ownProps.isLiked) {
        dispatch(PhotoActions.unlikePhoto(ownProps.photoId));
      } else {
        dispatch(PhotoActions.likePhoto(ownProps.photoId));
      }
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);
