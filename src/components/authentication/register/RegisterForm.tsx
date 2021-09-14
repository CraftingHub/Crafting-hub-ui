import {
    Button,
    chakra,
    FormControl,
    FormLabel,
    HTMLChakraProps,
    Input,
    Stack,
  } from '@chakra-ui/react'
import * as React from 'react'
import { PasswordField } from './PasswordField'
import { PasswordFieldVerification } from './PasswordFieldVerification'
  
  export const RegisterForm = (props: HTMLChakraProps<'form'>) => (
    <chakra.form
      onSubmit={(e) => {
        e.preventDefault()
        // your login logic here
      }}
      {...props}
    >
      <Stack spacing="6">
        <FormControl id="email">
          <FormLabel>First name </FormLabel>
          <Input name="first name" type="text" autoComplete="first name" required />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Last name </FormLabel>
          <Input name="last name" type="text" autoComplete="last name" required />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input name="email" type="email" autoComplete="email" required />
        </FormControl>
        <PasswordField />
        <PasswordFieldVerification />
        <Button type="submit" colorScheme="orange" size="lg" fontSize="md">
          Sign in
        </Button>
      </Stack>
    </chakra.form>
  )