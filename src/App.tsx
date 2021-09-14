import Routing from './routes/routing'
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import Navbar from  './layouts/Navbar'
import theme from './theme'

function App() {
  return (
     <ChakraProvider theme={theme}>
       <CSSReset />
       <Navbar/>
       <Routing />
     </ChakraProvider>
  );
}

export default App;
