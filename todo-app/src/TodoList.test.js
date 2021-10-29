import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

// Smoke test for TodoList component
it("should render without crashing", function() {
  render(<TodoList />)
});

// Snapshot test for TodoList component
it("should match snapshot", function() {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add new todo", function() {
    const {queryByText, getByLabelText} = render(<TodoList />);
    expect(queryByText("Wash Car")).not.toBeInTheDocument();

    const input = getByLabelText("Task");
    const btn = queryByText("Add Todo");
    fireEvent.change(input, { target: { value: "Wash Car" } });
    fireEvent.click(btn);
    expect(queryByText("Wash Car")).toBeInTheDocument();

});

it("should delete todo", function() {
    const {queryByText, getByLabelText} = render(<TodoList />);
    const input = getByLabelText("Task");
    const btn = queryByText("Add Todo");
    fireEvent.change(input, { target: { value: "Wash Car" } });
    fireEvent.click(btn);
    expect(queryByText("Wash Car")).toBeInTheDocument();

    const deleteBtn = queryByText("X");
    fireEvent.click(deleteBtn);
    expect(queryByText("Wash Car")).not.toBeInTheDocument();

});