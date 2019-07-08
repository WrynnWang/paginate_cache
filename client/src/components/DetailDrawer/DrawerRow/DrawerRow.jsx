import React from "react";
import styles from "./DrawerRow.module.scss";
import Typography from "@material-ui/core/Typography";

export const DrawerRow = props => {
  const { title, content } = props;
  return (
    <div className={styles.row}>
      <Typography
        variant="caption"
        display="block"
        gutterBottom
        className={
          title === "Short Description" ? styles.desc_title : styles.title
        }
      >
        {title}
      </Typography>
      <Typography variant="subtitle2" display="block" className={styles.text}>
        {content}
      </Typography>
    </div>
  );
};

export default DrawerRow;
