import { all, takeEvery } from "redux-saga/effects";
import * as actionTypes from "../action/actionTypes";

import {
  saga_getDefaultTickets,
  saga_getPreviousPage,
  saga_getNextPage
} from "./ticketSaga";

export default function* rootSaga() {
  yield all([
    takeEvery(actionTypes.GET_DEFAULT_TICKET, saga_getDefaultTickets),
    takeEvery(actionTypes.GET_PREVIOUS_PAGE, saga_getPreviousPage),
    takeEvery(actionTypes.GET_NEXT_PAGE, saga_getNextPage)
  ]);
}
