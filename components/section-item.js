import { Box } from '@chakra-ui/react'
import { motion } from "framer-motion"

const MotionItem = motion(Box)

const item = {
    hidden: (direction) => {
        return {
            opacity: 0,
            x: direction!=='vert' ? -5 : 0,
        }
    },
    show: (direction) => { 
        return { 
            opacity: 1, 
            y: direction==='vert' ? 5 : 0,
            x: 0,
            transition: {
                duration: .2,
            }
        }
    },
}

const SectionItem = ({ children, direction }) => (
    <MotionItem
        variants={item}
        custom={direction}
    >
        { children }
    </MotionItem>
)

export default SectionItem