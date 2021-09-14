import { Box, IconButton, useColorModeValue, useColorMode } from '@chakra-ui/react';
import { FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';
import useSound from "use-sound";

const lightswitch = require("../assets/audios/lightswitch.mp3")
  
const SwitchMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");

  const [play] = useSound(lightswitch, {
    volume: 0.1,
    sprite: {
      on: [0, 300],
      off: [500, 300]
    }
  });

  const handleClick = () => {
    text === "dark" ? play({ id: "on" }) : play({ id: "off" });
    toggleColorMode();
  };

  return (
    <Box
      as="button"
    //   display="flex"
    //   alignItems="center"
    //   justifyContent="center"
      fontWeight="semibold"
      p="2"
      mr="3"
      borderRadius="full"
      _focus={{ outline: 'none' }}
      _hover={{ size: "sx" ,bg: 'orange.200', transform: 'scale(1.1)' }}
      _active={{ bg: 'gray.300' }}
      transition="all .15s"
      cursor="pointer"
    >
      <IconButton
        aria-label="Toggle color mode"
        onClick={handleClick}
        icon={colorMode === 'light' ? <FaMoon /> : <FiSun />}
        size="md"
        isRound={true}
        variant="ghost"
        _hover={{ color: 'white' }}
      />
    </Box>
  );
}


export default SwitchMode