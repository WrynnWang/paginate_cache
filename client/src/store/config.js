import { combineReducers } from "redux";

import ticketReducer from "./reducer/ticketReducer";

export default combineReducers({
  tickets: ticketReducer
});
