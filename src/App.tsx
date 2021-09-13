import React from 'react';
import Routing from './routes/routing'
import { ChakraProvider } from "@chakra-ui/react"



function App() {
  return (
     <ChakraProvider>
       <Routing />
     </ChakraProvider>
  );
}

export default App;
