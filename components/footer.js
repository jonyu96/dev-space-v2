import { Box, Link, Tag, Text, Button, useColorModeValue } from "@chakra-ui/react"
import ExternalLink from '../components/external-link'

const Footer = () => (
    <Box
        position="absolute"
        bottom={{ base: 3, md: 3, lg: 5 }}
        left={0}
        h={10}
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
    >   
        <Link display="flex" fontSize={{ base: 'xx-small', md: 'xs' }} href="https://github.com/jonyu96/dev-space-v2">
            <Text mr={1}>Designed & Developed by</Text>
            <Text mr={2} fontWeight="bold">Jonathan Yu</Text>
            <Tag color="gray.100" bg="#B7A57A" size="xs" pl={1} pr={1} borderRadius={2}>v2</Tag>
        </Link>
    </Box>
)

export default Footer