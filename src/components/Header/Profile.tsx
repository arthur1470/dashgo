import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex 
            align="center" 
        >
            <Box mr="4" textAlign="right" >
                <Text>Arthur Marques</Text>
                <Text color="gray.300">Arthur.L2@hotmail.com</Text>
            </Box>
            <Avatar size="md" name="Arthur Marques" src="https://github.com/arthur1470.png" />
        </Flex>
    )
}