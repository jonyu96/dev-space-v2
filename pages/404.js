import NextLink from 'next/link'
import {
    Box,
    Text,
    Container,
    Button,
    Image,
    Flex
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
    >
        <Flex alignItems="center" mb={3}>
            <Text color="red" mr={2}>404:</Text>
            <Text fontSize="sm" fontWeight="bold">PAGE NOT FOUND</Text> 
        </Flex>
        <Image src="/images/benji.jpg" h="400px" borderRadius={3} alt="My dog Benji" />
    </Box>
  )
}

export default NotFound