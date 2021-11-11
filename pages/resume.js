import { Box, Flex, SimpleGrid, HStack, VStack, Text, Heading, Container, Button, Wrap, WrapItem, useColorModeValue } from '@chakra-ui/react'
import { MdOutlineMail, MdOutlineLocationOn } from 'react-icons/md'
import { FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi'
import { BsGlobe } from 'react-icons/bs'

import ExternalLink from '../components/external-link'
import ScrollableBox from '../components/scrollable-box'

const Content = ({ children }) => (
    <Container fontSize="xs" fontWeight="xs" p={0} maxW="100%">
        { children }
    </Container>
)

const Experience = () => (
    <Box flexDir="column">
        <Text variant="resume-section-title">EXPERIENCE</Text>
        <VStack spacing={.5} align="start" w="100%">
            <Text variant="resume-subtitle">2019 - 2021</Text>
            <Text variant="resume-title">T-Mobile - Data Engineer</Text>
            <Content>
                Developed a patented process in automating Android device tests. 
                Optimized Big Data queries and aggregations tasks by creating data pipelines.
                Designed and developed internal applications for data visualization and consumption. 
            </Content>
        </VStack>
        <VStack spacing={.5} align="start" w="100%" mt={5}>
            <Text variant="resume-subtitle">2021 - Present</Text>
            <Text variant="resume-title">T-Mobile - Software Engineer</Text>
            <Content>
                Led the development of the internal web-application used by various teams to manage users,
                configure data, and interact with existing microservices.
            </Content>
        </VStack>
    </Box>
)

const Projects = ({ ...props }) => (
    <Box flexDir="column" {...props}>
        <Text variant="resume-section-title">PROJECTS</Text>
        <VStack spacing={.5} align="start" w="100%">
            <Text variant="resume-title">Automated Device Testing</Text>
            <Content>   
                A platform composed of various Python scripts for automating and running 
                network performance tests on multiple Android devices in parallel. Python wrapper of 
                UI Automator is used to control interface actions.
            </Content>
        </VStack>
        <VStack spacing={.5} align="start" w="100%" mt={5}>
            <Text variant="resume-title">LOL-TANA</Text>
            <Content>
                An iOS mobile app that predicts your win percentage of a League of Legends game.
                It uses a Logistic Regression model and various in-game factors (e.g. kills, creep score)
                to determine the chances of a win throughout the game.
            </Content>
        </VStack>
        <VStack spacing={1} align="start" w="100%" mt={5}>
            <Text variant="resume-title">Tennis Footwork Assist</Text>
            <Content>
                A C++ appliation, inspired by the Hawk Eye technology used in professional tennis matches, 
                that tracks the lateral movement of a player in a video using OpenCV library. Visualization 
                is shown in a separate binary image with detected court lines (using Canny Edge detection) and
                marked pixels (center of player) moving left or right. 
            </Content>
        </VStack>
    </Box>
)

const Education = () => (
    <Box>
        <Text variant="resume-section-title">EDUCATION</Text>
        <VStack align="start" spacing={.5}>
            <Text variant="resume-subtitle">2014-2019</Text>
            <Text variant="resume-title">University of Washington</Text>
            <Content>
                B.S. Computer Science & Software Engineering <br />
                GPA: 3.5
            </Content>
        </VStack>
    </Box>
)

const Skills = ({ ...props }) => (
    <Box {...props}>
        <Text variant="resume-section-title">SKILLS</Text>
        <VStack align="start" spacing={1} fontSize="xs" fontWeight="regular">
            <Text>Front-End Development</Text>
            <Text>Microservices</Text>
            <Text>Back-End Development</Text>
            <Text>Visual Design</Text>
            <Text>Automating & Optimizing</Text>
            <Text>Wireframing & Prototyping</Text>
        </VStack>
    </Box>
)

const Tools = ({ ...props }) => (
    <Box {...props}>
        <Text variant="resume-section-title">TOOLS & FRAMEWORKS</Text>
        <VStack align="start" spacing={1} fontSize="xs" fontWeight="regular">
            <Text>Angular</Text>
            <Text>React</Text>
            <Text>HTML & CSS</Text>
            <Text>Charka UI + Nebular UI</Text>
            <Text>Java</Text>
            <Text>Python</Text>
            <Text>SQL + HiveQL + PySpark</Text>
            <Text>Bash</Text>
            <Text>Adobe XD</Text>
        </VStack>
    </Box>
)

const Left = () => (
    <Box>
        <Experience />
        <Projects mt={10} />
    </Box>
)

const Right = () => (
    <Box>
        <Education />
        <Skills mt={10} />
        <Tools mt={10} />
    </Box>
)

const Resume = () => {
    return (
        <Box 
            h="100%"
            display="flex" 
            flexDir="column"
        >
            <ExternalLink href="/data/resume.pdf" alignSelf="flex-end" isExternal={true}>
                <Button 
                    variant="outline" 
                    size="xs" 
                    borderRadius={3} 
                    borderColor={useColorModeValue('gray.800', 'gray.100')}
                    border="2px solid"
                    p={3}
                    mb={5}
                    _hover={{
                        bg: '#B7A57A'
                    }}
                >
                    Download Resume PDF
                </Button>
            </ExternalLink>
            <ScrollableBox 
                pr={3}
                display="flex"
                flexDir="column"
            >
                <Box display="flex" flexDir="column">
                    <Flex alignItems="center">
                        <Heading fontSize={['25px', '35px']}>Jonathan Yu</Heading>
                        <Text ml={5} fontSize={['xs', 'sm']} fontWeight="medium">Software Engineer @ T-Mobile</Text>
                    </Flex>
                    <Wrap spacing={[2, 4]} mt={2} wrap="wrap">
                        <WrapItem>
                            <MdOutlineMail size={15}/>
                            <Text ml={2} fontSize={[10, 11]}>jonathanjyu96@gmail.com</Text>
                        </WrapItem>
                        <WrapItem>
                            <FiPhone size={15}/>
                            <Text ml={2} fontSize={[10, 11]}>253-306-9511</Text>
                        </WrapItem>
                        <WrapItem>
                            <MdOutlineLocationOn size={15}/>
                            <Text ml={2} fontSize={[10, 11]}>Tacoma, WA</Text>
                        </WrapItem>
                        <WrapItem>
                            <BsGlobe size={15}/>
                            <Text ml={2} fontSize={[10, 11]}>jonathanyu.me</Text>
                        </WrapItem>
                        <WrapItem>
                            <FiGithub size={15}/>
                            <Text ml={2} fontSize={[10, 11]}>linkedin.com/in/jonathanyu96/</Text>
                        </WrapItem>
                    </Wrap>
                    <SimpleGrid templateColumns="65% 30%" columnGap="5%" mt="40px">
                        <Left />
                        <Right />
                    </SimpleGrid>
                </Box>
            </ScrollableBox>        
        </Box>
    )
}

export default Resume