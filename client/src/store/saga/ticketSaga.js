import axios from "axios";
import { call, put } from "redux-saga/effects";

import * as actionTypes from "../action/actionTypes";

export function* saga_getDefaultTickets() {
  try {
    const response = yield call(axios.get, `/tickets/0/12`);
    yield put({
      type: actionTypes.GET_DEFAULT_TICKET_SUCCESS,
      payload: response.data
    });
  } catch (e) {
    yield put({
      type: actionTypes.GET_DEFAULT_TICKET_FAIL,
      payload: { error: "Get Tickets Fail" }
    });
  }
}
