import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/system'
import * as React from 'react'

export const Link = (props: HTMLChakraProps<'a'>) => (
  <chakra.a
    marginStart="1"
    href="#"
    color={useColorModeValue('orange.500', 'orange.200')}
    _hover={{ color: useColorModeValue('orange.600', 'orange.300') }}
    display={{ base: 'block', sm: 'inline' }}
    {...props}
  />
)