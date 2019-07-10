import * as actionTypes from "../action/actionTypes";

export const initialState = {
  all_tickets: [], // caching all the tickets
  display_tickets: [], // the current slice of tickets for displaying
  backend_total_tickets: 0, // total tickets in the backend
  select_ticket: null, // the detail ticket that will be display in the side drawer
  currentPage: 0,
  totalPages: 0, // total pages of tickets for the cached tickets
  backendPages: 0, // total pages of tickets for tickets in the backend, get from headers.
  loading: false, // loading api is working or not
  initial: true, // whether at the initial stage
  toQuick: false, // whether user clicks the next button to quick
  reachEnd: false, // whether the backend has more tickets
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
        backendPages: action.payload.backend_pages,
        backend_total_tickets: action.payload.backend_total_tickets,
        loading: false,
        initial: false
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
      const new_all_tickets = state.all_tickets.concat(action.payload.result);
      return {
        ...state,
        all_tickets: new_all_tickets,
        totalPages: state.totalPages + action.payload.increase_pages,
        display_tickets: new_all_tickets.slice(
          12 * state.currentPage,
          12 * state.currentPage + 12
        ),
        loading: false,
        toQuick: false
      };
    case actionTypes.LOAD_TICKETS_FAIL:
      return {
        ...state,
        error: action.payload
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
