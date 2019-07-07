import axios from "axios";
import { all, call, put, select, delay } from "redux-saga/effects";

import * as actionTypes from "../action/actionTypes";

export function* saga_getDefaultTickets() {
  yield delay(500);
  try {
    const responses = yield all([
      call(axios.get, `/tickets/0/12`),
      call(axios.get, `/tickets/1/12`),
      call(axios.get, `/tickets/2/12`),
      call(axios.get, `/tickets/3/12`)
    ]);
    const result = responses.reduce((r, obj) => r.concat(obj.data), []);

    let increase_pages;
    if (result.length === 12 * 4) {
      increase_pages = 4;
    } else {
      increase_pages = parseInt(result.length / 12) + 1;
      yield put({
        type: actionTypes.REACH_END
      });
    }

    yield put({
      type: actionTypes.GET_DEFAULT_TICKET_SUCCESS,
      payload: { result: result, increase_pages }
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

export function* saga_loadTickets() {
  //use select to get redux state data.
  const state = yield select();
  const { totalPages } = state.tickets;

  yield delay(500);
  try {
    const responses = yield all([
      call(axios.get, `/tickets/${totalPages}/12`),
      call(axios.get, `/tickets/${totalPages + 1}/12`),
      call(axios.get, `/tickets/${totalPages + 2}/12`),
      call(axios.get, `/tickets/${totalPages + 3}/12`),
      call(axios.get, `/tickets/${totalPages + 4}/12`),
      call(axios.get, `/tickets/${totalPages + 5}/12`),
      call(axios.get, `/tickets/${totalPages + 6}/12`),
      call(axios.get, `/tickets/${totalPages + 7}/12`)
    ]);

    const result = responses.reduce((r, obj) => r.concat(obj.data), []);

    let increase_pages;
    if (result.length === 12 * 8) {
      increase_pages = 8;
    } else {
      increase_pages = parseInt(result.length / 12) + 1;
      yield put({
        type: actionTypes.REACH_END
      });
    }
    yield put({
      type: actionTypes.LOAD_TICKETS_SUCCESS,
      payload: { result: result, increase_pages }
    });
  } catch (e) {
    yield put({
      type: actionTypes.LOAD_TICKETS_FAIL,
      payload: { error: "LOAD Tickets Fail" }
    });
  }
}

export function* saga_getNextPage() {
  //use select to get redux state data.
  const state = yield select();
  const { currentPage, totalPages, loading, reachEnd } = state.tickets;

  if (currentPage === totalPages - 1 && loading) {
    console.log("Click to fask! Waiting for caching more data");
    yield put({ type: actionTypes.GET_NEXT_PAGE_TO_QUICK });
  }

  if (currentPage === totalPages - 2 && !loading && !reachEnd) {
    yield put({ type: actionTypes.LOAD_TICKETS });
  }

  try {
    yield put({ type: actionTypes.GET_NEXT_PAGE_SUCCESS });
  } catch (e) {
    yield put({
      type: actionTypes.GET_NEXT_PAGE_FAIL,
      error: "Get Next Page Fail"
    });
  }
}
