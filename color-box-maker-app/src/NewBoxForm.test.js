import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

// Smoke test for NewBoxForm component
it("should render without crashing", function() {
  render(<NewBoxForm />)
});

// Snapshot test for NewBoxForm component
it("should match snapshot", function() {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});

it("runs the create function on form submit", function() {
  const createMock = jest.fn();
  const { getByText } = render(<NewBoxForm createBox={createMock} />);
  const addBtn = getByText("Add Box");
  fireEvent.click(addBtn);
  expect(createMock).toHaveBeenCalled();
});