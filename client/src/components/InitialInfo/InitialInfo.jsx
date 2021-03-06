import React from "react";
import styles from "./InitialInfo.module.scss";

import CircularProgress from "@material-ui/core/CircularProgress";

export const InitialInfo = props => {
  // @desc    Indication for users during the initial stage.

  return (
    <div className={styles.InitialContainer}>
      <CircularProgress size={120} />
      <h2>Loading initial data</h2>
    </div>
  );
};

export default InitialInfo;
