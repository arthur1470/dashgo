import { Button, Flex, Stack, FormLabel, FormControl } from '@chakra-ui/react'
import { Input } from '../components/Form/input'

export default function Home() {
  return (
    <Flex 
      w="100vw" 
      h="100vh"
      align="center"
      justify="center"      
    >
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"               
      >
        <Stack spacing={4}>
          <Input name="email" label="email" type="email"/>

          <Input name='password' label='password' type="password" />
        </Stack>

        <Button 
          mt={6} 
          colorScheme="pink"
          size="lg"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
