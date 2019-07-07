import React from "react";
import { connect } from "react-redux";
import styles from "./ButtonsBar.module.scss";

//import material-ui components
import Button from "@material-ui/core/Button";

//import redux actions
import { getNextPage, getPreviousPage } from "../../store/action";

export const ButtonsBar = props => {
  const { currentPage, totalPages } = props.tickets;

  return (
    <div className={styles.MainContainer}>
      <div className={styles.ButtonsContainer}>
        <Button
          disabled={currentPage === 1}
          variant="contained"
          color="secondary"
          onClick={() => props.onGetPreviousPage()}
          className={styles.Button}
        >
          Back
        </Button>
        <div className={styles.InfoContainer}>
          Page <h2 className={styles.Variable}>{currentPage}</h2> of{" "}
          <h2 className={styles.Variable}>{totalPages}</h2>
        </div>
        <Button
          disabled={currentPage === totalPages}
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
