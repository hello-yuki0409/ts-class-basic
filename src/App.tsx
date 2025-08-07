import { Button, ChakraProvider, theme } from "@chakra-ui/react";
import { useEffect } from "react";
import { GetAllTodos } from "./lib/todo";

export default function App() {
  useEffect(() => {
    const getAllTodos = async () => {
      const todosData = await GetAllTodos();
      console.log(todosData);
    };
    getAllTodos();
  }, []);

  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Button colorScheme="teal">Button</Button>
      </ChakraProvider>
    </div>
  );
}
