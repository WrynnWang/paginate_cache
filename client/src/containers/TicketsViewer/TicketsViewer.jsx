import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styles from "./TicketsViewer.module.scss";

//import material-ui components
import CircularProgress from "@material-ui/core/CircularProgress";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

//import utils

//import self components
import TicketCard from "../../components/TicketCard/TicketCard";

//import redux actions
import { getDefaultTickets } from "../../store/action";

export const TicketsViewer = props => {
  useEffect(() => {
    // call default api at initial/mounting stage
    // fetch data from backend
    props.onGetDefaultTickets();
  }, []);

  const { initial, loading, all_tickets } = props.tickets;

  if (initial && loading) {
    return <div className={styles.MainContainer}>client is fetching data</div>;
  } else if (!initial && loading) {
    return <div className={styles.MainContainer}>loading</div>;
  } else {
    return (
      <div className={styles.MainContainer}>
        <div className={styles.InnerContainer}>
          <GridList
            cols={4}
            style={{
              justifyContent: "center"
            }}
            cellHeight="auto"
          >
            {all_tickets.map((tile, index) => (
              <GridListTile key={index}>
                <TicketCard ticket={tile} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
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
