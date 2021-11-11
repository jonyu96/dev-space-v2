import { Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

const ExternalLink = ({ href, children, ...props }) => (
    <MotionLink
        { ...props }
        display="flex" 
        alignItems="center"
        href={ href }
        p={2}
        cursor="pointer"
        whileHover={{
            y: -5,
            transition: {
                duration: 0.2
            }
        }}
    >
        { children }
    </MotionLink>
)

export default ExternalLink