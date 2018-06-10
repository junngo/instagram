import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const CommentBox = (props, context) => (
  <form>
    <textarea placeholder="Add a comment..." />
  </form>
);

export default CommentBox;
