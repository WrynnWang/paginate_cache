import * as actionTypes from "./actionTypes";

export const getDefaultTickets = () => {
  return {
    type: actionTypes.GET_DEFAULT_TICKET
  };
};

export const getPreviousPage = () => {
  return {
    type: actionTypes.GET_PREVIOUS_PAGE
  };
};

export const getNextPage = () => {
  return {
    type: actionTypes.GET_NEXT_PAGE
  };
};

export const selectSingleTicket = ticket => {
  return {
    type: actionTypes.SELECT_SINGLE_TICKET,
    payload: ticket
  };
};

export const removeSingleTicket = () => {
  return {
    type: actionTypes.REMOVE_SINGLE_TICKET
  };
};
