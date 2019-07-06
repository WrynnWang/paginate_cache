import axios from "axios";
import { all, call, put } from "redux-saga/effects";

import * as actionTypes from "../action/actionTypes";

export function* saga_getDefaultTickets() {
  try {
    const responses = yield all([
      call(axios.get, `/tickets/0/12`),
      call(axios.get, `/tickets/1/12`),
      call(axios.get, `/tickets/2/12`),
      call(axios.get, `/tickets/3/12`)
    ]);
    const result = responses.reduce((r, obj) => r.concat(obj.data), []);
    yield put({
      type: actionTypes.GET_DEFAULT_TICKET_SUCCESS,
      payload: result
    });
  } catch (e) {
    yield put({
      type: actionTypes.GET_DEFAULT_TICKET_FAIL,
      payload: { error: "Get Tickets Fail" }
    });
  }
}

export function* saga_getPreviousPage() {
  try {
    yield put({ type: actionTypes.GET_PREVIOUS_PAGE_SUCCESS });
  } catch (e) {
    yield put({
      type: actionTypes.GET_PREVIOUS_PAGE_FAIL,
      error: "Get Previous Page Fail"
    });
  }
}

export function* saga_getNextPage() {
  try {
    yield put({ type: actionTypes.GET_NEXT_PAGE_SUCCESS });
  } catch (e) {
    yield put({
      type: actionTypes.GET_NEXT_PAGE_FAIL,
      error: "Get Next Page Fail"
    });
  }
}
