import { Box, useColorModeValue } from '@chakra-ui/react'

const BorderBox = ({ children, ...props }) => {
    const borderColor = useColorModeValue('gray.800', 'gray.100')
    
    return (
        <Box
            {...props}
            display= "flex"
            // position= "relative"
            border= "1.75px solid"
            borderColor={borderColor}
            borderRadius= "5px"
        >
            { children }
        </Box>
    )
}

export default BorderBox