import { useState, useEffect } from 'react'
import { Box, Flex, Text, SimpleGrid, Square, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import Project from '../components/project'
import ProjectView from '../components/project-view'
import Section from '../components/section'
import SectionItem from '../components/section-item'

const Filter = () => (
  <Flex justifyContent="space-between">
    <Box
      id="sample-input-field"
      w="20%"
      display="flex"
      pt={1.5}
      pb={1.5}
      alignItems="center"
      borderBottom="2px solid"
      borderColor={useColorModeValue('gray.800', 'gray.100')}
      fontWeight="medium"
      fontSize="xs"
    >
      Filter by Tags
    </Box>

  </Flex>
)

const Legend = () => (
  <Flex alignItems="center">
    <Square w={4} h={2} bg="#EA0A8E" borderRadius={2} mr={2} />
    <Text fontSize="xs" fontWeight="medium" mr={4}>T-Mobile</Text>
    <Square w={4} h={2} bg="#B7A57A" borderRadius={2} mr={2} />
    <Text fontSize="xs" fontWeight="medium">Personal</Text>
  </Flex>
)

const parent = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
        staggerChildren: .2,
        duration: 1.3
    }
  }
}

const ProjectsWrapper = motion(SimpleGrid)

export default function Projects() {
  const [ projects, setProjects ] = useState(null)
  const [ project, setProject ] = useState(null)
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()

  useEffect(() => {
    getProjects()
  }, [])

  const getProjects = () => {
    fetch('/data/projects.json').then(
      (res) => { return res.json() }
    ).then(
      (jsonData) => { setProjects(jsonData) }
    )
  }
  
    return (
      <Box display="flex" flexDir="column" h="100%">
        {/* <Filter /> */}
        <Flex w="100%" alignItems="center" justifyContent="flex-end">
          <Legend />
        </Flex>

        {
          projects ? (
            <Section>
              <ProjectsWrapper 
                flex={1} 
                pt={5} 
                columns={[2, 2, 4]}
                spacing={5}
                overflow="scroll"
              >   
                {
                  [ ...projects ].map((p, index) => (
                    <SectionItem direction="horz" key={index}>
                      <Project project={p} onOpen={onOpen} onClick={() => setProject(p)} />
                    </SectionItem>
                  ))
                }
                {
                  project ? (
                    <ProjectView isOpen={isOpen} onClose={onClose} project={project} />
                  ) : null
                }
              </ProjectsWrapper>
            </Section>
          ) : null
        }
      </Box>
    )
  }
  