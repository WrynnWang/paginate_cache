import React, { useEffect } from "react";
import { connect } from "react-redux";
import styles from "./TicketsViewer.module.scss";

//import material-ui components
//import CircularProgress from "@material-ui/core/CircularProgress";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

//import self components
import TicketCard from "../../components/TicketCard/TicketCard";
import ToQuickDialog from "../../components/ToQuickDialog/ToQuickDialog";
import InitialInfo from "../../components/InitialInfo/InitialInfo";
import DetailDrawer from "../../components/DetailDrawer/DetailDrawer";
import NoMoreDataInfo from "../../components/NoMoreDataInfo/NoMoreDataInfo";
import ErrorInfo from "../../components/ErrorInfo/ErrorInfo";

//import redux actions
import { getDefaultTickets } from "../../store/action";

export const TicketsViewer = props => {
  const { onGetDefaultTickets } = props;

  useEffect(() => {
    // call default api at initial/mounting stage
    // fetch data from backend
    onGetDefaultTickets();
  }, [onGetDefaultTickets]);

  const {
    initial,
    loading,
    error,
    display_tickets,
    currentPage,
    totalPages
  } = props.tickets;

  if (error) {
    return (
      <div className={styles.MainContainer} data-testid="TicketsViewer">
        <ErrorInfo />
      </div>
    );
  } else {
    if (initial && loading) {
      return (
        <div className={styles.MainContainer} data-testid="TicketsViewer">
          <InitialInfo />
        </div>
      );
    } else if (currentPage === totalPages + 1 && loading) {
      return (
        <div className={styles.MainContainer} data-testid="TicketsViewer">
          <ToQuickDialog />
        </div>
      );
    } else {
      return (
        <div className={styles.MainContainer} data-testid="TicketsViewer">
          {/* <ToQuickDialog /> */}
          <NoMoreDataInfo
            initial={initial}
            loading={loading}
            currentPage={currentPage}
            totalPages={totalPages}
          />
          <div className={styles.InnerContainer}>
            <DetailDrawer />
            <GridList cols={4} cellHeight="auto">
              {display_tickets.map((tile, index) => (
                <GridListTile key={index}>
                  <TicketCard ticket={tile} />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </div>
      );
    }
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
