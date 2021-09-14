import Routing from './routes/routing'
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import theme from './theme'

function App() {
  return (
     <ChakraProvider theme={theme}>
       <CSSReset />
       <Routing />
     </ChakraProvider>
  );
}

export default App;
