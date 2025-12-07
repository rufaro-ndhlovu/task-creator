/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import App from "./page";

it("App Router: Works with Server Components", () => {
  render(<App />);
  expect(screen.getByRole("heading")).toHaveTextContent("Create A Task");
});
