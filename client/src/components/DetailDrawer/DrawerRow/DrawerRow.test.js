import React from "react";
import DrawerRow from "./DrawerRow";

import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

it("DrawerRow renders without crashing", () => {
  const { getByTestId } = render(<DrawerRow />);
  expect(getByTestId("DrawerRow")).toBeInTheDocument();
});
