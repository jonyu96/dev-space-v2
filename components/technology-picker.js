import { useState } from "react"
import { Box, Grid, Flex, chakra, shouldForwardProp } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"
import { FaAngular, FaPython, FaHtml5, FaCss3Alt, FaJava, FaReact } from 'react-icons/fa'
import { SiAdobexd, SiSwift, SiTypescript, SiGnubash } from 'react-icons/si'

const ICONS = [
    {
        name: 'Angular',
        icon: <FaAngular />,
    },
    {
        name: 'Python',
        icon: <FaPython />,
    },
    {
        name: 'HTML',
        icon: <FaHtml5 />,
    },
    {
        name: 'CSS',
        icon: <FaCss3Alt />,
    },
    {
        name: 'Adobe XD',
        icon: <SiAdobexd />,
    },
    {
        name: 'Swift',
        icon: <SiSwift />,
    },
    {
        name: 'Java',
        icon: <FaJava />
    },
    {
        name: 'Typescript',
        icon: <SiTypescript />
    },
    {
        name: 'React',
        icon: <FaReact />
    },
    {
        name: 'Bash',
        icon: <SiGnubash />
    }
]

// Variants
const center = {
    enter: (direction) => {
      return {
        scale: .6,
        x: direction > 0 ? 50 : -50
      }
    },
    center: {
        scale: 1.3,
        x: 0,
        opacity: 1
    },
};

const left = {
    enter: (direction) => {
        return {
            opacity: direction > 0 ? 1 : 0,
            scale: direction > 0 ? 1 : .6,
            x: direction > 0 ? 50 : -10,
        }
    },
    center: (direction) => {
        return {
            opacity: direction > 0 ? 1 : 1,
            scale: .6,
            x: 0,
            opacity: .5
        }
    }
}

const right = {
    enter: (direction) => {
        return {
            opacity: direction > 0 ? 0 : 1,
            scale: direction > 0 ? .6 : 1,
            x: direction > 0 ? 10 : -50
        }
    },
    center: (direction) => {
        return {
            opacity: direction > 0 ? 1 : 1,
            scale: .6,
            x: 0,
            opacity: .5
        }
    }
}

const IconContainer = chakra(motion.div, {
    baseStyle: {
        cursor: "pointer",
        w: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: { base: 40, sm: 40, md: 60 },
    },
    shouldForwardProp: (prop) => {
        return shouldForwardProp(prop)
    }
})

const TechnologyPicker = ({ setTechnology }) => {
    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    function selectHandler(direction) {
        const nextIndex = index + direction;

        if (nextIndex >= 0 && nextIndex < ICONS.length) {
            setIndex(nextIndex)
            setDirection(direction)
            setTechnology(ICONS[nextIndex].name)
        }
    }

    return (
        <Flex alignItems="center">
            <IconContainer
                onClick={ () => selectHandler(-1) }
                custom={direction}
                key={index - 1}
                variants={left}
                initial="enter"
                animate="center"
                transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.5 }
                }}
            >
                { index - 1 >= 0 ? ICONS[index - 1].icon : '' }
            </IconContainer>
            <AnimatePresence initial={false} custom={direction} exitBeforeEnter>
                <IconContainer
                    custom={direction}
                    key={index}
                    variants={center}
                    initial="enter"
                    animate="center"
                    transition={{
                        x: { duration: .5 },
                        opacity: { duration: 0.2 },
                    }}
                >
                    { ICONS[index].icon }
                </IconContainer>
            </AnimatePresence>
            <IconContainer
                onClick={ () => selectHandler(1) }
                custom={direction}
                key={index + 1}
                variants={right}
                initial="enter"
                animate="center"
                transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                }}
                opacity={.5}
            >
                { index + 1 < ICONS.length && ICONS[index + 1].icon }
            </IconContainer>
        </Flex>
    )
}

export default TechnologyPicker