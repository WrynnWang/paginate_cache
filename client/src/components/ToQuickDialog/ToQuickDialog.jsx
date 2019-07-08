import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styles from "./ToQuickDialog.module.scss";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
import LinearProgress from "@material-ui/core/LinearProgress";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ToQuickDialog = props => {
  // @desc    Indication for users that they click next
  // @desc    Button to fast to reach the end of cache.
  // @desc    A settimeout after loading data finished
  // @desc    For better user experience.
  const [open, setOpen] = useState(false);

  const { toQuick } = props.tickets;

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (toQuick === false) {
      const timer = setTimeout(() => {
        setOpen(toQuick);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setOpen(toQuick);
    }
  }, [toQuick]);

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <LinearProgress className={styles.margin} />
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            To quick to get next page. Please wait for loading more tickets.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            close
          </Button>
        </DialogActions>
        <LinearProgress className={styles.margin} />
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
