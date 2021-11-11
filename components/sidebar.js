import NextLink from 'next/link'
import { Box, Stack, Icon } from "@chakra-ui/react"
import { FiLinkedin, FiInstagram, FiMail } from "react-icons/fi"
import { FaGithubAlt } from "react-icons/fa"
import { motion } from "framer-motion"

import ExternalLink from './external-link'


const Sidebar = () => (
    <Box
        position="absolute"
        bottom={{ base: 10, md: 10, lg: 'auto' }}
        left={{ base: 'auto', md: 'auto', lg: 10 }}
        h={{ base: "auto", md: 'auto', lg: '100%' }}
        w={{ base: '100%', md: "100%", lg: 'auto' }}
        display="flex"
        alignItems="center"
        justifyContent="center"
    >
        <Stack
            spacing={5}
            direction={{ base: 'row', md: 'row', lg: "column" }}
        >   
            <ExternalLink href="https://github.com/jonyu96">
                <Icon as={FaGithubAlt} boxSize={{ base: "15px", md: "15px", lg: "20px" }}/>
            </ExternalLink>

            <ExternalLink href="https://www.linkedin.com/in/jonathanyu96/">
                <Icon as={FiLinkedin} boxSize={{ base: "15px", md: "15px", lg: "20px" }}/>
            </ExternalLink>

            <ExternalLink href="https://www.instagram.com/jonathanyu__/">
                <Icon as={FiInstagram} boxSize={{ base: "15px", md: "15px", lg: "20px"  }}/>
            </ExternalLink>

            <ExternalLink href="mailto:jonathanjyu96@gmail.com">
                <Icon as={FiMail} boxSize={{ base: "15px", md: "15px", lg: "20px" }}/>
            </ExternalLink>
        </Stack>
    </Box>
)

export default Sidebar