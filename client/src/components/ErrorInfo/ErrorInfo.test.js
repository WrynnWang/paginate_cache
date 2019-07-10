import React from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import { initialState } from "../../store/reducer/ticketReducer";
import rootReducer from "../../store/config";
import ErrorInfo from "./ErrorInfo";

afterEach(cleanup);

function renderWithRedux(
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}

it("ErrorInfo renders without crashing", () => {
  const { getByText } = renderWithRedux(<ErrorInfo />);
  expect(getByText("Error")).toBeInTheDocument();
});
