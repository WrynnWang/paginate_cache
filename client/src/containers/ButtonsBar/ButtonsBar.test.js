import React from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import { initialState } from "../../store/reducer/ticketReducer";
import rootReducer from "../../store/config";
import ButtonsBar from "./ButtonsBar";

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

it("ButtonsBar renders without crashing", () => {
  const { getByTestId } = renderWithRedux(<ButtonsBar />);
  expect(getByTestId("ButtonsBar")).toBeInTheDocument();
});
