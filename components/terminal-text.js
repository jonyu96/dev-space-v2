import { Text, Flex, Square, keyframes, useColorModeValue } from '@chakra-ui/react'
import Typist from 'react-typist'

const blink = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
`

export const TerminalText = ({ children, ...props }) => (
    <Text
        fontFamily="Roboto Mono"
        fontWeight="regular"
        fontSize="xx-small"
        { ...props }
    >
        { children }
    </Text>
)

export const TerminalTypist = ({ children, onTypingDoneHandler, index }) => (
    <Flex align="center" lineHeight={3}>
        <TerminalText as="span" mr={2}>~ $</TerminalText>
        <Typist
            startDelay={500 * index}
            avgTypingDelay={50}
            cursor={{ show: false }}
            onTypingDone={ onTypingDoneHandler() }
        >   
            <TerminalText>{ children }</TerminalText>
        </Typist>
        <Square animation={`${blink} 1s linear infinite`} ml={2} h="13px" w="7px" bg={useColorModeValue('gray.500', 'gray.200')}/>
    </Flex>
)