import React from "react";
import { connect } from "react-redux";
import styles from "./ButtonsBar.module.scss";

//import material-ui components
import Button from "@material-ui/core/Button";

//import self components
import PageInfo from "../../components/PageInfo/PageInfo";

//import redux actions
import { getNextPage, getPreviousPage } from "../../store/action";

export const ButtonsBar = props => {
  const {
    currentPage,
    backendPages,
    initial,
    loading,
    toQuick,
    error
  } = props.tickets;

  let showInitialInfo;
  if (initial && loading) {
    showInitialInfo = true;
  } else {
    showInitialInfo = false;
  }

  return (
    <div className={styles.MainContainer} data-testid="ButtonsBar">
      <div className={styles.ButtonsContainer}>
        <Button
          disabled={currentPage === 1 || initial || toQuick || error}
          variant="contained"
          color="secondary"
          onClick={() => props.onGetPreviousPage()}
          className={styles.Button}
        >
          Back
        </Button>

        <PageInfo
          show={showInitialInfo}
          currentPage={currentPage}
          backendPages={backendPages}
        />

        <Button
          disabled={currentPage === backendPages || initial || toQuick || error}
          onClick={() => props.onGetNextPage()}
          variant="contained"
          color="secondary"
          className={styles.Button}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tickets: state.tickets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetNextPage: () => dispatch(getNextPage()),
    onGetPreviousPage: () => dispatch(getPreviousPage())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonsBar);
