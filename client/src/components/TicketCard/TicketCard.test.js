import React from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import { initialState } from "../../store/reducer/ticketReducer";
import rootReducer from "../../store/config";
import TicketCard from "./TicketCard";

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

it("TicketCard renders without crashing", () => {
  const { getByText } = renderWithRedux(<TicketCard ticket={mockTicket} />);
  expect(getByText("New")).toBeInTheDocument();
});

const mockTicket = {
  coreData: {
    id: "ad25ee7bdb6533002eb79fd2ca96194e",
    number: "INC0010003",
    createdDate: "2019-05-28 08:00:47",
    lastUpdateDate: "2019-05-28 08:03:28",
    type: "INCIDENT",
    source: "ServiceNow",
    state: "In Progress",
    shortDescription: "MyWorkspace: Tenant/Root Site Collection",
    application: "",
    assignee: "Qiwen Liu",
    assignmentGroupATR: "Service Desk"
  }
};
