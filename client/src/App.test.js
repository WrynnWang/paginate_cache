import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import { initialState } from "./store/reducer/ticketReducer";
import rootReducer from "./store/config";
import App from "./App.js";

afterEach(cleanup);

// can provide initialState or the entire store that the ui is rendered with
function renderWithRedux(
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store
  };
}

test("can render with redux with defaults", () => {
  const { getByTestId } = renderWithRedux(<App />);
  expect(getByTestId("App")).toBeInTheDocument();
});

test("can render with redux with custom initial state", () => {
  const { getByTestId, getByText } = renderWithRedux(<App />, {
    initialState: {
      tickets: {
        all_tickets: [],
        display_tickets: [],
        select_ticket: null,
        currentPage: 0,
        totalPages: 0,
        loading: false,
        initial: true,
        toQuick: false,
        reachEnd: false,
        error: null
      }
    }
  });
  expect(getByTestId("TicketsViewer").textContent).toBe("Loading initial data");
  expect(getByTestId("ButtonsBar").textContent).toBe(
    "BackLoading initial dataNext"
  );
});
