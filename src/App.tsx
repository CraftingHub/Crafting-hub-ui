import React from 'react';
import Routing from './routes/routing'
import { ChakraProvider } from "@chakra-ui/react"
import Navbar from  './layouts/Navbar'



function App() {
  return (
     <ChakraProvider>
       <Navbar/>
       <Routing />
     </ChakraProvider>
  );
}

export default App;
