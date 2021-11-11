import { Box, Circle, Image, Text, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const child = {
    hidden: { opacity: 0, x: -5 },
    show: { opacity: 1, x: 0 }
}

const ProjectBox = motion(Box)

export const TypeIdentifier = ({ color, ...props }) => (
    <Circle 
        { ...props }
        size="13px" 
        border="2px solid" 
        borderColor={useColorModeValue('gray.800', 'gray.100')}
        bg={ color }
    />
)

const Project = ({ project, onOpen, onClick }) => (
    
    <ProjectBox
        w="100%"
        h="150px"
        border="2px solid" 
        borderColor={useColorModeValue('gray.800', 'gray.100')} 
        borderRadius="5px"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        onClick={() => [onOpen(), onClick()] }
        position="relative"
        variants={child}
        sx={{
        '.project-icon': {
            transition: '.2s ease'
        },
        '&:hover .project-icon': {
            transform: 'rotate(20deg)'
        }
        }}
    >
        <Image 
            className="project-icon"
            src={project['iconPath']}
            boxSize="50px"
            alt="project icon"
        />
        <Text fontWeight="bold" fontSize="xs" mt={3}>{ project['name'] }</Text>
        <TypeIdentifier color={project['color']} position="absolute" top={2} left={2} />
  </ProjectBox>
)

export default Project