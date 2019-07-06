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
