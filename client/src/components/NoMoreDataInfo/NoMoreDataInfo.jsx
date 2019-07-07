import React from "react";
import styles from "./NoMoreDataInfo.module.scss";

export const PageInfo = props => {
  const { loading, currentPage, totalPages } = props;

  if (!loading && currentPage === totalPages) {
    return (
      <div className={styles.InfoContainer}>
        <h4>This is the end. No more data.</h4>
      </div>
    );
  } else {
    return <></>;
  }
};

export default PageInfo;
