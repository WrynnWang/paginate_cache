import { all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../action/actionTypes";

import { saga_getDefaultTickets } from "./ticketSaga";

export default function* rootSaga() {
  yield all([
    takeLatest(actionTypes.GET_DEFAULT_TICKET, saga_getDefaultTickets)
  ]);
}
