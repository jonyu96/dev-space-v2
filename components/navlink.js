import NextLink from 'next/link'
import { Text, Link, useColorModeValue } from "@chakra-ui/react"
import { motion } from 'framer-motion'

const NavLink = ({ href, path, _target, children }) => {
    const active = path === href

    const activeColor = useColorModeValue('gray.800', 'gray.100')
    const inactiveColor = useColorModeValue('gray.500', 'gray.600')
    
    return (
        <NextLink href={href} passHref>
            <Link
                p={2}
                _target={_target}
                fontWeight="bold"
                fontSize="small"
                color={active ? activeColor : inactiveColor}
                decoration="none"
            >
                <Text>
                    { children }
                </Text>
                {/* {
                    active ? (
                        <motion.div 
                            transition={{ duration: .5 }}
                            layoutId="underline" 
                            style={{ width: "100%", height: "3px", background: activeColor === 'gray.800' ? '#1A202C' : '#EDF2F7' }} 
                        />
                    ) : null
                } */}
            </Link>
        </NextLink>
    )
}

export default NavLink