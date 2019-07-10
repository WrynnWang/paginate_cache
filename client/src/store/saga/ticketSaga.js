import axios from "axios";
import { all, call, put, select } from "redux-saga/effects";

import * as actionTypes from "../action/actionTypes";

export function* saga_getDefaultTickets() {
  try {
    const responses = yield all([
      call(axios.get, `/tickets/0/12`),
      call(axios.get, `/tickets/1/12`),
      call(axios.get, `/tickets/2/12`),
      call(axios.get, `/tickets/3/12`)
    ]);

    const backend_total_tickets = responses[1].data.headers["x-total-count"];
    const backend_pages = parseInt(backend_total_tickets / 12) + 1;

    const result = responses.reduce((r, obj) => r.concat(obj.data.data), []);

    let increase_pages;
    if (backend_pages > 4) {
      increase_pages = 4;
    } else {
      increase_pages = parseInt(result.length / 12) + 1;
      yield put({
        type: actionTypes.REACH_END
      });
    }

    yield put({
      type: actionTypes.GET_DEFAULT_TICKET_SUCCESS,
      payload: {
        result: result,
        increase_pages,
        backend_pages,
        backend_total_tickets
      }
    });
  } catch (e) {
    yield put({
      type: actionTypes.GET_DEFAULT_TICKET_FAIL,
      payload: { error: "Initial state getting tickets fail" }
    });
  }
}

// @Desc Generate an array of api address for loading data(reuse a lot)
const param_array_generator = (totalPages, backendPages) => {
  let param_array = [];
  for (var i = 0; i < backendPages - totalPages; i++) {
    param_array.push(totalPages + i);
  }
  return param_array;
};

export function* saga_loadTickets() {
  //use select to get redux state data.
  const state = yield select();

  // totalPages means pages of tickets in current cache.
  // backendPages means pages of tickets store in the backend.
  const { totalPages, backendPages } = state.tickets;

  try {
    const param_array = param_array_generator(totalPages, backendPages);

    const responses = yield all(
      param_array.map(page => {
        return call(axios.get, `/tickets/${page}/12`);
      })
    );

    // reduce all tickets in a single array.
    const result = responses.reduce((r, obj) => r.concat(obj.data.data), []);

    let increase_pages;
    if (backendPages - totalPages > 8) {
      // when backend has enough tickets remaining
      increase_pages = 8;
    } else {
      // when backend does not has enough tickets remaining
      increase_pages = parseInt(result.length / 12) + 1;

      // update reachEnd boolean inside reducer
      yield put({
        type: actionTypes.REACH_END
      });
    }

    // when successfully loading tickets, also change the current displaying
    // ticket slice inside reducer.
    yield put({
      type: actionTypes.LOAD_TICKETS_SUCCESS,
      payload: { result: result, increase_pages }
    });
  } catch (e) {
    yield put({
      type: actionTypes.LOAD_TICKETS_FAIL,
      payload: { error: "Loading tickets fail. Please refresh this page" }
    });
  }
}

export function* saga_getNextPage() {
  //use select to get redux state data.
  const state = yield select();
  const { currentPage, totalPages, loading, reachEnd, error } = state.tickets;

  // if backend still has tickets for loading and there is no error occured.
  if (!reachEnd && !error) {
    // if current page is the last page and click the next button to navigate
    // to the first uncaching page, while still loading tickets at the same time
    if (currentPage === totalPages && loading) {
      yield put({ type: actionTypes.GET_NEXT_PAGE_TO_QUICK });
    }

    // if current page is the second last page and click the next button to
    // navigate to the last caching page, whilc not loading tickets at the moment
    if (currentPage === totalPages - 1 && !loading) {
      yield put({ type: actionTypes.LOAD_TICKETS });
    }
  }

  // no matter reach end of not, click the next button will finally
  // go to the next page, the point is when call the loading api.
  yield put({ type: actionTypes.GET_NEXT_PAGE_SUCCESS });
}
