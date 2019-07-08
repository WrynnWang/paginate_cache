import React from "react";
import InitialInfo from "./InitialInfo";

import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

it("InitialInfo renders without crashing", () => {
  const { getByText } = render(<InitialInfo />);
  expect(getByText("Loading initial data")).toBeInTheDocument();
});
