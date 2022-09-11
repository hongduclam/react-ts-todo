import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import Todo from "../Todo";
import renderer from "react-test-renderer";

describe("<Todo />", () => {
  it("Should matches DOM Snapshot", async () => {
    const tree = renderer
      .create(<Todo />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })

  it("Should handle add todo correctly", async () => {
    render(<Todo/>);
    fireEvent.change(screen.getByPlaceholderText("Input task"), {
      target: { value: "Task 1" }
    })
    fireEvent.click(screen.getByText("ADD"));
    await waitFor(() => {
      expect(screen.queryAllByText("Task 1")).toHaveLength(1);
      expect(screen.queryAllByText("DONE")).toHaveLength(1);
    })
  })
});