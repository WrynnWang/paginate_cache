import * as actionTypes from "../action/actionTypes";

const initialState = {
  all_tickets: [],
  loading: false,
  initial: true,
  error: null
};

const tickets = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DEFAULT_TICKET:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_DEFAULT_TICKET_SUCCESS:
      return {
        ...state,
        all_tickets: action.payload,
        loading: false,
        initial: false
      };
    case actionTypes.GET_DEFAULT_TICKET_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default tickets;
