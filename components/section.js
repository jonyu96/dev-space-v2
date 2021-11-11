import { Box } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: .15,
        }
    },
    exit: { opacity: 0 }
}

const MotionContainer = motion(Box)

const Section = ({ children, ...props }) => {
    return (
        <AnimatePresence>
            <MotionContainer
                { ...props }
                variants={container}
                initial="hidden"
                animate="show"
            >
                { children }
            </MotionContainer>
        </AnimatePresence>
    )
}

export default Section