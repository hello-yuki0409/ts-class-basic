import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("タイトルがあること", () => {
    render(<App />);
    const title = screen.getByTestId("title");

    expect(title).toBeInTheDocument();
  });
});
