import Hello from "./Hello";
import { render, screen } from "@testing-library/react";

it("renders Hello component", () => {
  render(<Hello />);
  expect(screen.getByRole("heading", { name: "Hello" })).toBeInTheDocument();
});
