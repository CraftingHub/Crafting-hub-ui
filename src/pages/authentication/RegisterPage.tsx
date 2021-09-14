import {
    Box,
    Button,
    Heading,
    SimpleGrid,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { Card } from '../../components/authentication/Card'
import { DividerWithText } from '../../components/authentication/DividerWithText'
import { Link } from '../../components/authentication/Link'
import { RegisterForm } from '../../components/authentication/register/RegisterForm'
import { Logo } from '../../components/authentication/Logo'
  
  
const RegisterPage = () => (
  <Box
    bg={useColorModeValue('gray.50', 'inherit')}
    minH="100vh"
    py="12"
    px={{ base: '4', lg: '8' }}
  >
    <Box maxW="lg" mx="auto">
      <Logo mx="auto" h="8" mb={{ base: '10', md: '20' }} />
      <Heading textAlign="center" size="xl" fontWeight="extrabold">
        Sign up to create an account
      </Heading>
      <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
        <Text as="span">You already have an account?</Text>
        <Link href="#">get the free trial</Link>
      </Text>
      <Card>
        <RegisterForm />
        <DividerWithText mt="6">or continue with</DividerWithText>
        <SimpleGrid mt="6" columns={3} spacing="3">
          <Button color="currentColor" variant="outline">
            <VisuallyHidden>Register with Facebook</VisuallyHidden>
            <FaFacebook />
          </Button>
          <Button color="currentColor" variant="outline">
            <VisuallyHidden>Register with Google</VisuallyHidden>
            <FaGoogle />
          </Button>
          <Button color="currentColor" variant="outline">
            <VisuallyHidden>Register with Github</VisuallyHidden>
            <FaGithub />
          </Button>
        </SimpleGrid>
      </Card>
    </Box>
  </Box>
)  


export default RegisterPage