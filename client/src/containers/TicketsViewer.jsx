import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styles from "./TicketsViewer.module.scss";

//import material-ui components
import CircularProgress from "@material-ui/core/CircularProgress";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

//import utils

//import self components

//import redux actions
export const TicketsViewer = props => {
  useEffect(() => {
    // call default api at initial/mounting stage
    // fetch data from backend
    console.log("component did mount");
  }, []);

  return <div className={styles.MainContainer}>Hello World</div>;
};

export default TicketsViewer;
