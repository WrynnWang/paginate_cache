import React from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import { initialState } from "../../store/reducer/ticketReducer";
import rootReducer from "../../store/config";
import ToQuickDialog from "./ToQuickDialog";

afterEach(cleanup);

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

afterEach(cleanup);

it("ToQuickDialog renders without crashing", () => {
  const { getByText } = renderWithRedux(<ToQuickDialog />);
  expect(
    getByText(
      "To quick to get next page. Please wait for loading more tickets."
    )
  ).toBeInTheDocument();
});
