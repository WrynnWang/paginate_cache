import * as actionTypes from "../action/actionTypes";

const initialState = {
  all_tickets: [],
  display_tickets: [],
  currentPage: 0,
  totalPages: 0,
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
        display_tickets: action.payload.slice(0, 12),
        currentPage: 1,
        totalPages: 4,
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
        loading: true
      };
    case actionTypes.GET_PREVIOUS_PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        currentPage: state.currentPage - 1,
        display_tickets: state.all_tickets.slice(
          12 * (state.currentPage - 2),
          12 * (state.currentPage - 2) + 12
        )
      };
    case actionTypes.GET_PREVIOUS_PAGE_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case actionTypes.GET_NEXT_PAGE:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_NEXT_PAGE_SUCCESS:
      return {
        ...state,
        currentPage: state.currentPage + 1,
        display_tickets: state.all_tickets.slice(
          12 * state.currentPage,
          12 * state.currentPage + 12
        ),
        loading: false
      };
    case actionTypes.GET_NEXT_PAGE_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default tickets;
