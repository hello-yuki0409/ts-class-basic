import { useEffect, useState } from "react";
import { GetAllTodos } from "./lib/todo";
import type { Todo } from "./domain/todo";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    const getAllTodos = async () => {
      const todosData = await GetAllTodos();
      setTodos(todosData);
      setIsLoading(false);
    };

    getAllTodos();
  }, []);

  if (isloading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1 data-testid="title">TODOリスト</h1>
      <TableContainer>
        <Table variant="simple" data-testid="table">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Done</Th>
              <Th isNumeric>CreatedAt</Th>
            </Tr>
          </Thead>
          <Tbody>
            {todos.map((todo) => (
              <Tr key={todo.id}>
                <Td>{todo.title}</Td>
                <Td>{todo.done ? "TRUE" : "FALSE"}</Td>
                <Td>{todo.created_at}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
