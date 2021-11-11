import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#FFFFFF', '#202023')(props)
        },
    })
}

const fonts = {
    body: "Roboto, -apple-system, BlinkMacSystemFont, sans-serif",
}

const components = {
    Button: {
        baseStyle: {
            _focus: {
                boxShadow: "none"
            }
        }
    },
    Link: {
        baseStyle: props => ({
            _hover: {
                textDecoration: "none",
                color: mode('gray.800', 'gray.100')(props)
            },
            _focus: {
                boxShadow: "none"
            }
        })
    },
    Modal: {
        baseStyle: props => ({
            dialog: {
                width: ["95%", "95%", "70%"],
                maxWidth: ["95%", "95%", "70%"],
                height: ["90%", "80%", "60%"],
                bg: mode('whiteAlpha.900', 'blackAlpha.800')(props),
                motionPreset: 'none',
                animation: 'none'
            },
        })
    },
    Text: {
        variants: {
            "key": {
                fontSize: ["10px", "13px"],
                fontWeight: "medium"
            },
            "resume-section-title": {
                fontSize: ['sm', 'medium'],
                fontWeight: "bold",
                mb: 3
            },
            "resume-title": {
                fontSize: ['md', 'lg'],
                fontWeight: "bold"
            },
            "resume-subtitle": {
                fontSize: "xs",
                fontWeight: "bold"
            }
        }
    }
}

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false 
}

const theme = extendTheme({
    styles,
    fonts,
    components,
    config,
})

export default theme