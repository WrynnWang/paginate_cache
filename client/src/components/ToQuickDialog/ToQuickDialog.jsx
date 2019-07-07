import React from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Slide from "@material-ui/core/Slide";
import LinearProgress from "@material-ui/core/LinearProgress";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  margin: {
    marginTop: 10,
    marginBottom: 10
  }
});

export const ToQuickDialog = props => {
  const classes = useStyles();

  const { toQuick } = props.tickets;
  return (
    <div>
      <Dialog
        open={toQuick}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <LinearProgress className={classes.margin} />
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            To quick to get next page. Please wait for loading more tickets.
          </DialogContentText>
        </DialogContent>
        <LinearProgress className={classes.margin} />
      </Dialog>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tickets: state.tickets
  };
};

export default connect(
  mapStateToProps,
  null
)(ToQuickDialog);
