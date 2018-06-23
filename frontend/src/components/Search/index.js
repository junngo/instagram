import { connect } from "react-redux";
import { actionCreators as userActions } from "redux/moules/user";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const { user: { userList, imageList }, routing: { loaction }} = state;
  return {
    imageList,
    userList,
    location
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { match: { params: { searchTerm }}} = ownProps;
  return {
    searchByTerm: () => {
      dispatch(userActions.searchByTerm(searchTerm));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
