import React from "react";
import PageInfo from "./PageInfo";

import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

it("PageInfo renders without crashing", () => {
  const { getByTestId } = render(<PageInfo />);
  expect(getByTestId("PageInfo")).toBeInTheDocument();
});
