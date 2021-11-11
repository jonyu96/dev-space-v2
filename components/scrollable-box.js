import { Box, useColorModeValue } from '@chakra-ui/react'

const ScrollableBox = ({ children, ...props }) => {
    const bg = useColorModeValue('#E2E8F0', '#4A5568')
    
    return (
        <Box
            {...props}
            overflowY="scroll"
            css={{
                '&::-webkit-scrollbar': {
                    width: '6px',
                },
                '&::-webkit-scrollbar-track': {
                    width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: useColorModeValue('#E2E8F0', '#4A5568'),
                    borderRadius: '24px',
                },
            }}
        >
            { children }
        </Box>
    )
}

export default ScrollableBox