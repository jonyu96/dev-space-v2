import NextLink from 'next/link'
import {
    Box,
    Text,
    Divider,
    Button,
    Image,
    Flex
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Box
        h="100%"
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
    >
        <Image src="/images/benji.jpg" h="400px" borderRadius={3} alt="My dog Benji" />
        <Flex ml={5} flexDir="column" fontWeight="bold">
            <Text display="flex" fontSize="xl">bark bark~</Text>
            <Text mt={2} fontSize="sm" color="red">404: Page Not Found</Text> 
            <NextLink href="/">
                <Button mt={3} borderRadius={3} size="sm" bg="#B7A57A">Return To Home</Button>
            </NextLink>
        </Flex>
    </Box>
  )
}

export default NotFound