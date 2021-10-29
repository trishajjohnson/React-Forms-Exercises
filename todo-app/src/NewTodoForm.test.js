import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

// Smoke test for NewTodoForm component
it("should render without crashing", function() {
  render(<NewTodoForm />)
});

// Snapshot test for NewTodoForm component
it("should match snapshot", function() {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

it("runs the create function on form submit", function() {
    const createMock = jest.fn();
    const { getByText } = render(<NewTodoForm createTodo={createMock} />);
    const addBtn = getByText("Add Todo");
    fireEvent.click(addBtn);
    expect(createMock).toHaveBeenCalled();
});