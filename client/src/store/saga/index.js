import { all, takeEvery, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../action/actionTypes";

import {
  saga_getDefaultTickets,
  saga_getPreviousPage,
  saga_getNextPage,
  saga_loadTickets,
  saga_selectSingleTicket,
  saga_removeSingleTicket
} from "./ticketSaga";

export default function* rootSaga() {
  yield all([
    takeEvery(actionTypes.GET_DEFAULT_TICKET, saga_getDefaultTickets),
    takeEvery(actionTypes.GET_PREVIOUS_PAGE, saga_getPreviousPage),
    takeEvery(actionTypes.GET_NEXT_PAGE, saga_getNextPage),
    takeLatest(actionTypes.LOAD_TICKETS, saga_loadTickets),
    takeLatest(actionTypes.SELECT_SINGLE_TICKET, saga_selectSingleTicket),
    takeLatest(actionTypes.REMOVE_SINGLE_TICKET, saga_removeSingleTicket)
  ]);
}
