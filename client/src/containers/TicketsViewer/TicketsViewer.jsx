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
import { getDefaultTickets } from "../../store/action";

export const TicketsViewer = props => {
  useEffect(() => {
    // call default api at initial/mounting stage
    // fetch data from backend
    console.log("component did mount");
    props.onGetDefaultTickets();
  }, []);

  return <div className={styles.MainContainer}>Hello World</div>;
};

const mapStateToProps = state => {
  return {
    tickets: state.tickets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetDefaultTickets: () => dispatch(getDefaultTickets())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketsViewer);
