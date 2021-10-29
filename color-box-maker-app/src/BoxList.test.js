import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

// Smoke test for BoxList component
it("should render without crashing", function() {
  render(<BoxList />)
});

// Snapshot test for BoxList component
it("should match snapshot", function() {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add new box", function() {
    const {queryByText, getByLabelText} = render(<BoxList />);
    expect(queryByText("X")).not.toBeInTheDocument();

    const height = getByLabelText("Box Height");
    const width = getByLabelText("Box Width");
    const backgroundColor = getByLabelText("Box Color");
    const btn = queryByText("Add Box");
    fireEvent.change(height, { target: { value: "5" } });
    fireEvent.change(width, { target: { value: "5" } });
    fireEvent.change(backgroundColor, { target: { value: "red" } });
    fireEvent.click(btn);
    expect(queryByText("X")).toBeInTheDocument();

});

it("should delete box", function() {
    const {queryByText, getByLabelText} = render(<BoxList />);
    const height = getByLabelText("Box Height");
    const width = getByLabelText("Box Width");
    const backgroundColor = getByLabelText("Box Color");
    const btn = queryByText("Add Box");
    fireEvent.change(height, { target: { value: "5" } });
    fireEvent.change(width, { target: { value: "5" } });
    fireEvent.change(backgroundColor, { target: { value: "red" } });
    fireEvent.click(btn);
    expect(queryByText("X")).toBeInTheDocument();

    const deleteBtn = queryByText("X");
    fireEvent.click(deleteBtn);

    expect(queryByText("X")).not.toBeInTheDocument();

});