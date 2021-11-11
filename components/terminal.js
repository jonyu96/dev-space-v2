import { useState } from "react"
import { Box, Text, Grid, Flex, Wrap, WrapItem, Tag, useColorModeValue } from "@chakra-ui/react"
import { TerminalText, TerminalTypist } from "./terminal-text"

import Section from "./section"
import SectionItem from "./section-item"

const INTRO = (
    <Section mt={3} w="90%">
        <SectionItem direction="vert">
            <Text fontSize={{ base: "sm", md: "md" }} textTransform="uppercase" fontWeight="bold" color="#B7A57A" letterSpacing={2}>
                Welcome to my dev space! 🤩
            </Text>
        </SectionItem>

        <SectionItem direction="vert">
            <Text mt={2} fontSize={{ base: "11px", md: "11px" }} fontWeight="medium" textAlign="justify">
                I am a developer located in Seattle, currently over at T-Mobile.
                Feel free to learn about me as a dev or reach out for any opportunities!
            </Text>
        </SectionItem>
    </Section>
)

const HOBBIES = (
    <Section mt={3}>
        <Wrap shouldWrapChildren spacing={3}>
            {
                ["Tennis 🎾", "Running 🏃", "Golf 🏌️", "Lifting 🏋️", "Piano 🎹", "Korean Fried Chicken 🍗", "Benji 🐶"]
                    .map((interest) => (
                        <SectionItem key={interest} direction="horz">
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
            flex={1}
            w="100%"
            h="100%"
            bg={useColorModeValue('gray.700', 'gray.900')}
            p={4}
            display="flex"
            flexDirection="column"
            position="relative"
            color="gray.100"
        >
            <TerminalText> Last Login: { date } </TerminalText>
            
            <Grid flex={1} templateRows={{ base: "1.5fr 1fr", md: "1fr 1fr" }} rowGap={2} mt={5}>
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