import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

// Smoke test for Todo component
it("should render without crashing", function() {
  render(<Todo />)
});

// Snapshot test for Todo component
it("should match snapshot", function() {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});