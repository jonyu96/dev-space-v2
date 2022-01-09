import { Box, Flex, Text, Container, Link, VStack, Square, chakra, shouldForwardProp, useColorModeValue } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"
import { FiExternalLink } from 'react-icons/fi'

const STATS = {
    "Angular": {
        exp: 2,
        str: 5,
        link: 'https://angular.io'
    },
    "React": {
        exp: 3,
        str: 6,
        link: 'https://reactjs.org'
    },
    "Python": {
        exp: 5,
        str: 5,
        link: 'https://www.python.org'
    },
    "HTML": {
        exp: 3,
        str: 7,
        link: 'https://www.w3schools.com/html/'
    },
    "CSS": {
        exp: 3,
        str: 7,
        link: 'https://www.w3schools.com/css/'
    },
    "Adobe XD": {
        exp: 5,
        str: 7,
        link: 'https://www.adobe.com/products/xd.html'
    },
    "Swift": {
        exp: 2,
        str: 2,
        link: 'https://developer.apple.com/swift/'
    },
    "Java": {
        exp: 6,
        str: 4,
        link: 'https://docs.oracle.com/en/java/'
    },
    "Typescript": {
        exp: 3,
        str: 5,
        link: 'https://www.typescriptlang.org'
    },
    "Bash": {
        exp: 3,
        str: 4,
        link: 'https://www.gnu.org/software/bash/'
    }
}

const StatKey = chakra("span", {
    baseStyle: {
        fontSize: "xs"
    }
})


const StatHeader = ({ technology }) => (
    <Flex 
        alignItems="center" 
        borderBottom="2px dotted"
        justifyContent="space-between"
        pt={1}
        pb={2}
    >
        <Flex alignItems="center">
            {/* <StatKey>Name: </StatKey> */}
            <Text fontSize={["sm", "lg"]} fontWeight="bold">{ technology }</Text>
        </Flex>
        <Link href={STATS[technology].link} _hover={{ color: '#B7A57A' }}>
            <FiExternalLink cursor="pointer"/>    
        </Link>
    </Flex>
)

const StatBar = chakra(motion.div, {
    shouldForwardProp: (prop) => {
        return shouldForwardProp(prop)
    }
})

const Stat = ({ technology, children }) => {
    const stat = children === 'Exp:' ? 'exp' : 'str'

    return (
        <Flex flexDir={["row", "column"]} alignItems={["center", "start"]} w="100%">
            <StatKey mb={[0, 2]} mr={[2, 0]}>{ children }</StatKey>
            <Box h={3} w="100%" bg="gray.100" borderRadius={2}>
                <AnimatePresence>
                    <StatBar layout initial={{ width: 0 }} animate={{ width: `${STATS[technology][stat] / 10 * 100}%`}}
                        h={3} bg="#B7A57A" borderRadius={2} />
                </AnimatePresence>
            </Box>
        </Flex>
    )
}

const TechnologyStats = ({ technology }) => {
    return (
        <Box
            display="flex"
            flexDir="column"
            fontFamily="Roboto Mono"
            color="gray.100"
            bg={useColorModeValue('gray.700', 'gray.900')} 
            borderRadius={3}        
            pl={3}
            pr={3}
            pt={2}
        >
            <StatHeader technology={technology} />
            <VStack flex={1.3} spacing={[1, 3]} pt={2} justifyContent="center">
                {/* <Text fontSize="xs" fontWeight="bold" alignSelf="flex-end">Stats</Text> */}
                <Stat technology={technology}>Exp:</Stat>
                <Stat technology={technology}>Str:</Stat>
            </VStack>
        </Box>
    )
}

export default TechnologyStats