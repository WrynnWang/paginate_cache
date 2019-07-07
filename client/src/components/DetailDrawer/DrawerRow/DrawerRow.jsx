import React from "react";
import styles from "./DrawerRow.module.scss";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    width: 110
  },
  desc_title: {
    width: 110,
    fontSize: 8
  },
  text: {
    marginLeft: 15,
    width: 350,
    borderBottom: "1px solid"
  }
});
export const DrawerRow = props => {
  const classes = useStyles();

  const { title, content } = props;
  return (
    <div className={styles.row}>
      <Typography
        variant="caption"
        display="block"
        gutterBottom
        className={
          title === "Short Description" ? classes.desc_title : classes.title
        }
      >
        {title}
      </Typography>
      <Typography variant="subtitle2" display="block" className={classes.text}>
        {content}
      </Typography>
    </div>
  );
};

export default DrawerRow;
