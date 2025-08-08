import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import { Todo } from "../domain/todo";

// モックを作成
const mockGetAllTodos = jest
  .fn()
  .mockResolvedValue([
    new Todo("1", "title1", false, "2021-01-01T00:00:00Z"),
    new Todo("2", "title2", false, "2021-01-01T00:00:00Z"),
    new Todo("3", "title3", false, "2021-01-01T00:00:00Z"),
    new Todo("4", "title4", false, "2021-01-01T00:00:00Z"),
  ]);

// モックしたいモジュールのパス、関数のあるファイルのパスを指定する
jest.mock("../lib/todo.ts", () => {
  return {
    // ../lib/todo.tsの GetAllTodos が呼ばれたら、mockGetAllTodos を代わりに呼び出す
    GetAllTodos: () => mockGetAllTodos(),
  };
});

describe("App", () => {
  test("タイトルがあること", async () => {
    render(<App />);
    await waitFor(() => screen.getByTestId("table")); // waitFor -> 中の条件がクリアするまで待ち続ける健気なやつ
    const title = screen.getByTestId("title");

    expect(title).toBeInTheDocument();
  });

  test("TODOが4つ表示されること", async () => {
    render(<App />);
    await waitFor(() => screen.getByTestId("table"));
    const todos = screen.getByTestId("table").querySelectorAll("tr");

    expect(todos.length - 1).toBe(4);
  });
});
