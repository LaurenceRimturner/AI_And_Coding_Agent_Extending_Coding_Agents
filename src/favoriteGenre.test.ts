import { describe, expect, test } from "vitest";
import { favoriteGenre } from "./books";
import { initialBooks } from "./data";

describe("favoriteGenre", () => {
  const withRead = (...ids: string[]) =>
    initialBooks.map((book) => ({ ...book, isRead: ids.includes(book.id) }));

  test("returns the genre with the most read books", () => {
    expect(favoriteGenre(withRead("b1", "b4", "b2"))).toBe("sci-fi");
  });

  test("returns the alphabetically first genre on a tie", () => {
    expect(favoriteGenre(withRead("b1", "b2"))).toBe("fantasy");
  });

  test("ignores unread books", () => {
    expect(favoriteGenre(withRead("b3"))).toBe("mystery");
  });

  test("returns null when no book is read", () => {
    expect(favoriteGenre(withRead())).toBeNull();
  });
});
