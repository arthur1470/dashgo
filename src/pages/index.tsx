import { Button, Flex, Input, Stack, FormLabel, FormControl } from '@chakra-ui/react'

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
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input 
              type="email" 
              id="email"
              name="email" 
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: "gray.900"
              }}
              size="lg"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input 
              type="password" 
              id="password"
              name="password" 
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: "gray.900"
              }}
              size="lg"
              placeholder=''
            />
          </FormControl>
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
