import React from "react";
import styles from "./PageInfo.module.scss";

export const PageInfo = props => {
  const { show, currentPage, totalPages } = props;

  if (show) {
    return (
      <div className={styles.InfoContainer}>
        <h4>Loading initial data</h4>
      </div>
    );
  } else {
    return (
      <div className={styles.InfoContainer}>
        Page <h2 className={styles.Variable}>{currentPage}</h2> of{" "}
        <h2 className={styles.Variable}>{totalPages}</h2>
      </div>
    );
  }
};

export default PageInfo;
