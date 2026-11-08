import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Favorite genre", () => {
  test("shows the alphabetically first genre as favorite on a tie", () => {
    render(<App />);
    expect(screen.getByText(/Favorite genre/)).toHaveTextContent(
      "Favorite genre: fantasy"
    );
  });

  test("shows '–' when no book is read", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(
      screen.getByRole("button", { name: "Mark Dune as unread" })
    );
    await user.click(
      screen.getByRole("button", { name: "Mark The Hobbit as unread" })
    );
    expect(screen.getByText(/Favorite genre/)).toHaveTextContent(
      "Favorite genre: –"
    );
  });
});
