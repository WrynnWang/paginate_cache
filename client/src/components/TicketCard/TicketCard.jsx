import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    width: 240,
    height: 230,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    borderRadius: 20,
    border: "1px solid grey"
  },

  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 10,
    marginright: 10
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 13
  },
  detail: {
    fontSize: 12,
    marginBottom: 2
  },
  createdAt: {
    fontSize: 14,
    marginBottom: 2
  },
  desc: {
    fontSize: 15,
    marginTop: 10,
    textAlign: "left",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: 4,
    width: 220
  },
  button: {
    position: "absolute",
    bottom: 20,
    //width: 200,
    left: 20
  }
});

export default function TicketCard(props) {
  const classes = useStyles();

  const { ticket } = props;

  return (
    <Card className={classes.card} data-test="Card">
      <CardContent className={classes.content}>
        <Typography className={classes.title} color="primary" gutterBottom>
          New
        </Typography>
        <Typography variant="h5" component="h5" color="textSecondary">
          {ticket.coreData.number}
        </Typography>
        <Typography className={classes.createdAt} color="textSecondary">
          Application: {ticket.coreData.application}
        </Typography>
        <Typography className={classes.detail} color="textSecondary">
          Assignee: {ticket.coreData.assignee}
        </Typography>
        <Typography className={classes.desc} color="primary" noWrap>
          {ticket.coreData.shortDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          //onClick={() => props.showDetail(ticket)}
          className={classes.button}
          //variant="contained"
          size="small"
          data-test="Button"
        >
          LEARN MORE
        </Button>
      </CardActions>
    </Card>
  );
}
