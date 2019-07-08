import React from "react";
import styles from "./PageInfo.module.scss";

export const PageInfo = props => {
  // @desc    Infomation inside the paginator bar.
  // @desc    Indicate how many pages intotal and
  // @desc    which page is currently displaying.

  const { show, currentPage, totalPages } = props;

  if (show) {
    return (
      <div className={styles.InfoContainer} data-testid="PageInfo">
        <h4>Loading initial data</h4>
      </div>
    );
  } else {
    return (
      <div className={styles.InfoContainer} data-testid="PageInfo">
        Page <h2 className={styles.Variable}>{currentPage}</h2> of{" "}
        <h2 className={styles.Variable}>{totalPages}</h2>
      </div>
    );
  }
};

export default PageInfo;
