import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import Ionicon from "react-ionicons";
import UserDisplay from "components/UserDisplay";

const UserList = props => (
  <div className={styles.container}>
    <div className={styles.box}>
      <header className={styles.header}>
        <h4 className={styles.title}>{props.title}</h4>
        <span onClick={props.closeLikes}>
          <Ionicon icon="md-close" fontSite="20px" color="black"/>
        </span>
      </header>
      <div className={styles.content}>
        {props.loading ? <Loading /> : <RenderUsers list={props.userList} />}
      </div>
    </div>
  </div>
);

const RenderUsers = props =>
  props.list.map(user => (
    <UserDisplay horizontal={true} user={user} key={user.id} />
  ));

RenderUsers.propTypes = {
  list: PropTypes.array
};

UserList.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array,
  userList: PropTypes.array,
  closeLikes: PropTypes.func.isRequired
};

export default UserList;
