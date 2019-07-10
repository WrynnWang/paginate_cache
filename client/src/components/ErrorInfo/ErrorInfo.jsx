import React from "react";
import { connect } from "react-redux";
import styles from "./ErrorInfo.module.scss";

export const ErrorInfo = props => {
  // @desc    Indication for Error.

  const { error } = props.tickets;

  let error_content;
  if (error) {
    error_content = <h4>{error.error}</h4>;
  } else {
    error_content = <></>;
  }

  return (
    <div className={styles.ErrorContainer}>
      <h2>Error</h2>
      {error_content}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tickets: state.tickets
  };
};

export default connect(
  mapStateToProps,
  null
)(ErrorInfo);
