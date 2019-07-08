import React from "react";
import NoMoreDataInfo from "./NoMoreDataInfo";

import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

it("NoMoreDataInfo renders without crashing", () => {
  const { getByText } = render(<NoMoreDataInfo />);
  expect(getByText("This is the end. No more data.")).toBeInTheDocument();
});
