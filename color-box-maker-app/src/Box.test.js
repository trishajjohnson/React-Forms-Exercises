import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Box from "./Box";

// Smoke test for Box component
it("should render without crashing", function() {
  render(<Box />)
});

// Snapshot test for Box component
it("should match snapshot", function() {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});