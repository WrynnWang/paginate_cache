import * as actionTypes from "../action/actionTypes";

const initialState = {
  all_tickets: [],
  display_tickets: [],
  select_ticket: null,
  currentPage: 0,
  totalPages: 0,
  loading: false,
  initial: true,
  toQuick: false,
  reachEnd: false,
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
        all_tickets: action.payload.result,
        display_tickets: action.payload.result.slice(0, 12),
        currentPage: 1,
        totalPages: action.payload.increase_pages,
        loading: false,
        initial: false
        //toQuick: false
      };
    case actionTypes.GET_DEFAULT_TICKET_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case actionTypes.GET_PREVIOUS_PAGE:
      return {
        ...state,
        //loading: false,
        currentPage: state.currentPage - 1,
        display_tickets: state.all_tickets.slice(
          12 * (state.currentPage - 2),
          12 * (state.currentPage - 2) + 12
        )
      };

    case actionTypes.GET_NEXT_PAGE:
      return state;
    case actionTypes.GET_NEXT_PAGE_SUCCESS:
      return {
        ...state,
        currentPage: state.currentPage + 1,
        display_tickets: state.all_tickets.slice(
          12 * state.currentPage,
          12 * state.currentPage + 12
        )
        //loading: false
      };
    case actionTypes.GET_NEXT_PAGE_FAIL:
      return {
        ...state,
        error: action.payload
        //loading: false
      };
    case actionTypes.GET_NEXT_PAGE_TO_QUICK:
      return {
        ...state,
        toQuick: true
      };
    case actionTypes.LOAD_TICKETS:
      return {
        ...state,
        loading: true
      };
    case actionTypes.LOAD_TICKETS_SUCCESS:
      return {
        ...state,
        all_tickets: state.all_tickets.concat(action.payload.result),
        totalPages: state.totalPages + action.payload.increase_pages,
        loading: false,
        toQuick: false
      };
    case actionTypes.LOAD_TICKETS_FAIL:
      return {
        ...state,
        error: action.payload
        //loading: false
      };
    case actionTypes.REACH_END:
      return {
        ...state,
        reachEnd: true
      };

    case actionTypes.SELECT_SINGLE_TICKET:
      return {
        ...state,
        select_ticket: action.payload
      };

    case actionTypes.REMOVE_SINGLE_TICKET:
      return {
        ...state,
        select_ticket: null
      };

    default:
      return state;
  }
};

export default tickets;
