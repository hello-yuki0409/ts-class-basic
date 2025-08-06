import { Button, ChakraProvider, theme } from "@chakra-ui/react";

export default function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Button colorScheme="teal">Button</Button>
      </ChakraProvider>
    </div>
  );
}
