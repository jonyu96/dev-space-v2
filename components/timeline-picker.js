import { Box, VStack, Text, useColorModeValue, chakra } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Bar = chakra(motion.div, {
    baseStyle: {
        h:"5",
        w:"3",
        bg:"#B7A57A",
        // border: "1.5px solid",
        borderRadius:"1.5",
        position:"absolute",
        top:"0",
        right:"-1.5"
    }
})

const TimelinePicker = ({ selectedTimeline, setTimeline }) => {
    const borderColor = useColorModeValue('gray.800', 'gray.100')

    function handleSelect(timeline) {
        setTimeline(timeline)
    }

    return (
        <Box
            height="100%"
            borderRight="2px dotted"
            borderColor={borderColor}
            pt={5}
        >
            <VStack spacing={10}>
                {
                ["UW", "T-Mobile", "Microsoft"].map((t) => (
                    <Box key={t} w="100%" display="flex" justifyContent="flex-end" pr={5} position="relative">
                        <Text 
                            fontSize="xs" 
                            fontWeight="bold" 
                            cursor="pointer" 
                            opacity={t===selectedTimeline ? 1 : .5}
                            onClick={ () => handleSelect(t) }
                        >
                            { t }
                        </Text>
                        { 
                            selectedTimeline === t ? <Bar key={t} layoutId="bar" borderColor={borderColor} transition={{ duration: .2 }}/> 
                                : null 
                        }
                    </Box>
                ))
                }
            </VStack>
        </Box>
    )
}

export default TimelinePicker