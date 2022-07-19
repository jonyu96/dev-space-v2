import NextLink from 'next/link'
import {
    Container,
    Box,
    Flex,
    Stack,
    Link,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    useColorModeValue,
    Button,
    Icon
} from '@chakra-ui/react'

import { FaHamburger } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'

import Logo from './logo'
import NavLink from './navlink'
import ThemeToggle from './theme-toggle'
import ExternalLink from './external-link'

const Navbar = (props) => {
    const { path } = props

    return (
        <Box
            position="fixed"
            top={10}
            left={0}
            as="nav"
            w="100%"
            zIndex={1}
        >
            <Container
                display="flex"
                maxW={["100%", "90%", "container.lg"]}
                wrap="wrap"
                alignItems="center"
                justifyContent="space-between"
            >
                <Logo />
                <Stack
                    ml={4}
                    direction={{ md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                >
                    <NavLink href="/" path={path}>Home</NavLink>
                    <NavLink href="/experience" path={path}>Experience</NavLink>
                    <NavLink href="/projects" path={path}>Projects</NavLink>
                    {/* <NavLink href="/resume" path={path}>Resume</NavLink> */}
                </Stack>

                <Flex>
                    <Box mr={4} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu id="menu" isLazy>
                            <MenuButton 
                                as={IconButton}
                                aria-label="Menu"
                                icon={<FaHamburger w={4} h={4}/>}
                                variant="outline"
                                h={25}
                                pl={4}
                                pr={4}
                                borderRadius={3}
                                border="1.5px solid"
                                borderColor={useColorModeValue('gray.800', 'gray.100')}
                            />
                            <MenuList fontSize={[""]}>
                                <NextLink href="/" passHref>
                                    <MenuItem fontWeight="medium">Home</MenuItem>
                                </NextLink>
                                <NextLink href="/experience" passHref>
                                    <MenuItem fontWeight="medium">Experience</MenuItem>
                                </NextLink>
                                <NextLink href="/projects" passHref>
                                    <MenuItem fontWeight="medium">Projects</MenuItem>
                                </NextLink>
                                {/* <NextLink href="/resume" passHref>
                                    <MenuItem fontWeight="medium">Resume</MenuItem>
                                </NextLink> */}
                            </MenuList>
                        </Menu>
                    </Box>
                    <ThemeToggle />
                </Flex>
            </Container>
        </Box>
    )
}

export default Navbar