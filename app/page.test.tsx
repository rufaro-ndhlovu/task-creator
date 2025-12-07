/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import App from "./page";

jest.mock("@supabase/supabase-js");

jest.mock("react-datetime-picker", () => {
  return function MockDateTimePicker(props) {
    return <input data-testid="mock-datetime-picker" onChange={props.onChange} />;
  };
});

describe("Home Page", () => {
  it("renders heading", () => {
    render(<App />);
    expect(screen.getByText("Create A Task")).toBeInTheDocument();
  });
});
