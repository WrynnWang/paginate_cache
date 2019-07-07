import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styles from "./DetailDrawer.module.scss";

import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";

import DrawerRow from "./DrawerRow/DrawerRow";

import { removeSingleTicket } from "../../store/action";

const useStyles = makeStyles({
  title: {
    width: 80
  },
  text: {
    marginLeft: 5,
    textDecoration: "underline"
  },
  desc: {
    // textAlign: "left",
    // overflow: "hidden",
    // textOverflow: "ellipsis",
    // WebkitLineClamp: 4,
    textDecoration: "underline"
    //width: 120
  }
});

export const DetailDrawer = props => {
  const [initial, setInitial] = useState(true);
  const [ticket, setTicket] = useState(null);
  const [right, setRight] = useState(false);

  const classes = useStyles();

  const { select_ticket } = props.tickets;

  const selectTicketHandler = select_ticket => {
    setTicket(select_ticket);
  };

  const toggleDrawer = () => {
    setRight(!right);
  };

  const closeDrawer = () => {
    props.onRemoveSingleTicket();
  };

  useEffect(() => {
    selectTicketHandler(select_ticket);
    if (initial) {
      setInitial(false);
    } else {
      toggleDrawer();
    }
  }, [select_ticket]);

  let drawer_content;
  if (ticket) {
    drawer_content = (
      <div className={styles.drawer}>
        <div className={styles.drawerHeader}>
          <h3 className={styles.title}>{ticket.coreData.number}</h3>
          <Button className={styles.closeButton} onClick={() => closeDrawer()}>
            X
          </Button>
        </div>

        <DrawerRow title={"Assignee"} content={ticket.coreData.assignee} />
        <DrawerRow
          title={"Short Description"}
          content={ticket.coreData.shortDescription}
        />
        <DrawerRow
          title={"Application"}
          content={ticket.coreData.application}
        />
        <DrawerRow title={"made_sla"} content={ticket.allFields.made_sla} />
        <DrawerRow
          title={"upon_reject"}
          content={ticket.allFields.upon_reject}
        />
        <DrawerRow title={"opened_by"} content={ticket.allFields.opened_by} />
        <DrawerRow title={"priority"} content={ticket.allFields.priority} />
        <DrawerRow title={"activity_due"} content={"Not found"} />
        <DrawerRow title={"approval"} content={"Not found"} />
      </div>
    );
  }

  return (
    <Drawer anchor="right" open={right} onClose={() => closeDrawer()}>
      {drawer_content}
    </Drawer>
  );
};

const mapStateToProps = state => {
  return {
    tickets: state.tickets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveSingleTicket: () => dispatch(removeSingleTicket())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailDrawer);
