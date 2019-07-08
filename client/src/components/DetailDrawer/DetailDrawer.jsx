import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styles from "./DetailDrawer.module.scss";

import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";

import DrawerRow from "./DrawerRow/DrawerRow";

import { removeSingleTicket } from "../../store/action";

export const DetailDrawer = props => {
  // @desc  Right Side Drawer. Display detailed ticket.

  const [ticket, setTicket] = useState(null);

  const { select_ticket } = props.tickets;

  const selectTicketHandler = select_ticket => {
    setTicket(select_ticket);
  };

  const closeDrawer = () => {
    props.onRemoveSingleTicket();
  };

  useEffect(() => {
    selectTicketHandler(select_ticket);
  }, [select_ticket]);

  let drawer_content;
  if (ticket) {
    // If select a single ticket, drawer content is not null.
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
    <div data-testid="DetailDrawer">
      <Drawer
        anchor="right"
        open={ticket !== null}
        onClose={() => closeDrawer()}
      >
        {drawer_content}
      </Drawer>
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
    onRemoveSingleTicket: () => dispatch(removeSingleTicket())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailDrawer);
