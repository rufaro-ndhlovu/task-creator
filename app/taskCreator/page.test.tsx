import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TaskCreator from "./page";


// Mock Supabase
const mockInsert = jest.fn();
jest.mock("@supabase/supabase-js", () => ({
  createClient: () => ({
    from: () => ({
      insert: mockInsert,
      select: jest.fn().mockResolvedValue({ data: [], error: null }),
    }),
  }),
}));


// Mock DateTimePicker
jest.mock("react-datetime-picker", () => {
  return function MockDatePicker({ onChange }) {
    return <input data-testid="mock-date" onChange={(e) => onChange(e.target.value)} />;
  };
});


// Minimal tests
describe("TaskCreator", () => {
  beforeEach(() => {
    mockInsert.mockReset();
  });

  it("renders essential form fields", () => {
    render(<TaskCreator />);
    expect(screen.getByLabelText("Title:")).toBeInTheDocument();
    expect(screen.getByLabelText("Status:")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("allows entering input values", () => {
    render(<TaskCreator />);
    fireEvent.change(screen.getByLabelText("Title:"), {
      target: { value: "My Task" },
    });
    expect(screen.getByLabelText("Title:").value).toBe("My Task");
  });

  it("submits data and shows success message", async () => {
    mockInsert.mockResolvedValue({ data: [{}], error: null });

    render(<TaskCreator />);

    fireEvent.change(screen.getByLabelText("Title:"), {
      target: { value: "Test Task" },
    });
    fireEvent.change(screen.getByLabelText("Status:"), {
      target: { value: "Pending" },
    });

    fireEvent.click(screen.getByText("Submit"));

    await waitFor(() => expect(mockInsert).toHaveBeenCalled());

    expect(screen.getByText("Form submitted successfully")).toBeInTheDocument();
  });
});