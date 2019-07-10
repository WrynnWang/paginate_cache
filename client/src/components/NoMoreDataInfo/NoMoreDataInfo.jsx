import React from "react";
import styles from "./NoMoreDataInfo.module.scss";

export const NoMoreDataInfo = props => {
  // @desc    Indication for uses that there are no more tickets
  // @desc    From backend.
  const { initial, loading, currentPage, totalPages } = props;

  if (!loading && currentPage === totalPages && !initial) {
    return (
      <div className={styles.InfoContainer}>
        <h4>This is the end. No more data.</h4>
      </div>
    );
  } else {
    return <></>;
  }
};

export default NoMoreDataInfo;
