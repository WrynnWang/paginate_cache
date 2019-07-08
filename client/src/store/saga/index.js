import { all, takeEvery, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../action/actionTypes";

import {
  saga_getDefaultTickets,
  saga_getNextPage,
  saga_loadTickets
} from "./ticketSaga";

export default function* rootSaga() {
  yield all([
    takeEvery(actionTypes.GET_DEFAULT_TICKET, saga_getDefaultTickets),
    takeEvery(actionTypes.GET_NEXT_PAGE, saga_getNextPage),
    takeLatest(actionTypes.LOAD_TICKETS, saga_loadTickets)
  ]);
}
