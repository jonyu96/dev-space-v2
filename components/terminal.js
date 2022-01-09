import { useState } from "react"
import { Box, Text, Grid, Flex, Wrap, WrapItem, Tag, useColorModeValue } from "@chakra-ui/react"
import { TerminalText, TerminalTypist } from "./terminal-text"

import Section from "./section"
import SectionItem from "./section-item"

const INTRO = (
    <Section mt={[1, 3]} w={['95%', '90%']}>
        <SectionItem direction="vert">
            <Text fontSize={{ base: "sm", md: "lg" }} textTransform="uppercase" fontWeight="bold" color="#B7A57A" letterSpacing={2}>
                Welcome to my dev space! 🤩
            </Text>
        </SectionItem>

        <SectionItem direction="vert">
            <Text mt={2} fontSize={['10px', 'xs']} fontWeight="medium" textAlign="justify">
                Hi! My name is Jonathan and I am currenly SWE over at T-Mobile. 
                Feel free to reach out for any opportunities!
            </Text>
        </SectionItem>
    </Section>
)

const HOBBIES = (
    <Section mt={3}>
        <Wrap shouldWrapChildren spacing={3}>
            {
                ["Tennis 🎾", "Running 🏃", "Golf 🏌️", "Piano 🎹", "Korean Fried Chicken 🍗", "Benji 🐶"]
                    .map((interest, index) => (
                        <SectionItem key={index} direction="horz">
                            <Tag textTransform="uppercase" fontSize="10px" fontWeight="bold" variant="outline" color="gray.200" p={1.5} borderRadius={2}>
                                { interest }    
                            </Tag>
                        </SectionItem>
                    ))
            }
        </Wrap>
    </Section>
)


const Terminal = (props) => {

    const [stage, setStage] = useState(0)

    const date = new Date().toDateString()

    function onTypingDoneHandler() {
        setStage(stage + 1)
    }

    return (
        <Box 
            h="100%"
            w="100%"
            bg={useColorModeValue('gray.700', 'gray.900')}
            p={[2, 4]}
            display="flex"
            flexDirection="column"
            position="relative"
            color="gray.100"
        >
            <TerminalText> Last Login: { date } </TerminalText>
            
            <Grid flex={1} templateRows="1fr 1fr" rowGap={2} mt={[2, 5]}>
                <Box>
                    <TerminalTypist index={1} onTypingDoneHandler={() => onTypingDoneHandler}> cat Intro.txt </TerminalTypist>
                    { stage >= 1 ? INTRO : null }
                </Box>
                
                <Box>
                    <TerminalTypist index={3.5} onTypingDoneHandler={() => onTypingDoneHandler}> ls /Hobbies </TerminalTypist>
                    { stage >= 2 ? HOBBIES : null }
                </Box>
            </Grid>
        </Box>
    )
}

export default Terminal