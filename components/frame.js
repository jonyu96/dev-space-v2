import { Box, HStack, Circle, Flex, useColorModeValue } from '@chakra-ui/react'

export const MobileFrame = ({ children, ...props }) => {
    // const borderColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.300') 
    const borderColor = useColorModeValue('gray.800', 'gray.100')

    return (
        <Box
            h={["175px", "250px"]}
            w={["100px", "150px"]}
            border="2px solid"
            borderColor={borderColor} 
            borderRadius={15}
            { ...props }
            display="flex"
            flexDir="column"
            alignItems="center"
        >
            <Box 
                h={3} w="30%" 
                border="2px solid" 
                borderColor={borderColor} 
                borderBottomRadius={5}
                borderTop="none"
            />
            <Flex flex={1} alignItems="center">
                { children }
            </Flex>
        </Box>
    )
}

export const WebFrame = ({ children, ...props }) => {
    // const borderColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.300')
    const borderColor = useColorModeValue('gray.800', 'gray.100')

    return (
        <Box 
            border="2px solid"
            borderColor={borderColor} 
            borderRadius={3}
            diplay="flex"
            flexDir="column"
            { ...props }
        >
            <Box 
                p={2}
                borderBottom="2px solid" 
                borderColor={borderColor}
                display="flex"
                alignItems="center"
            >
                <HStack>
                    {
                        [ ...Array(3) ].map((num, idx) => (
                            <Circle key={idx} h={3} w={3} border="2px solid" borderColor={borderColor} />
                        ))
                    }
                </HStack>
            </Box>
            <Box flex={1}>
                { children }
            </Box>
        </Box>
    )
}