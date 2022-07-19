import { Box, Flex, Image, Text, Square, Container, useColorModeValue } from '@chakra-ui/react'

import Section from './section'
import SectionItem from './section-item'
import ScrollableBox from './scrollable-box'

const UW = {
    imagePath: '/images/me-student.jpg',
    imageAlt: 'Me as a student',
    role: 'Student',
    place: '@ University of Washington',
    color: '#4B2E83',
    period: 'Sept 2014 - Jun 2019',
    facts: [
        "Contributed to the Korean Student Association for all five years (as President in 2017).",
        "Switched from Physiology major to Computer Science",
        "Participated in DubHacks 2017 & 2018.",
        "Completed independent study in Mobile Development/AR.", 
        "Completed electives including Machine Learning and Computer Vision.",
    ]
}

const T_MOBILE = {
    imagePath: '/images/me-employee.jpg',
    imageAlt: 'Me as a SDE',
    role: 'SDE',
    place: '@ T-Mobile',
    color: '#EA0A8E',
    period: 'Jun 2019 - Mar 2022',
    facts: [
        "Developed platform for running asynchronous network tests on Android devices.",
        "Automated and optimized Big Data pipelines.",
        "Designed and developed data visualization applications.",
        "Developed a full-stack application for managing core services API and data on the eSIM platform."
    ]
}

const MICROSOFT = {
    imagePath: '/images/me-microsoft.jpg',
    imageAlt: 'Me as a SDE at microsoft',
    role: 'SDE',
    place: '@ Microsoft',
    color: '#7FBA00',
    period: 'Jun 2022 - Current',
    facts: [
        "Currently on the 3S team to help improve the unified and intelligent search system in the M365 space."
    ]
}

const ImageBox = (props) => (
    <Image
        borderColor={useColorModeValue('gray.800', 'gray.100')} 
        border="2px solid"
        borderRadius={5}
        objectFit={'cover'}
        boxSize="100px"
        alt="picture of me"
        { ...props }
    />
)

const TimelineInfo = ({ role, place, color, period }) => (
    <Flex flex={1} flexDir="column" justifyContent="center" pl={2}>
        <Text mb={3} fontSize={['sx', '25px']} fontWeight="bold">{ role }</Text>
        <Text fontSize={{ base: '10px', md: 'sm' }} fontWeight="bold" color={ color }>{ place }</Text>
        <Text fontSize={{ base: '10px', md: 'sm' }} fontWeight="bold">{ period }</Text>
    </Flex>
)

const TimelineFact = ({ children }) => (
    <Flex alignItems="center" mt={2}>
        <Square 
            w={3} h={1.5} 
            bg={useColorModeValue('gray.300', 'gray.600')} 
            borderRadius={1} 
            mr={3}
            />
        <Text fontSize="11px" fontWeight="medium">{ children }</Text>
    </Flex>
)

const Timeline = ({ timeline }) => {
    const timelineToDisplay = eval(timeline.replace('-', '_').toUpperCase())
    const { imagePath, imageAlt, role, place, color, period, facts } = timelineToDisplay
    
    return (
        <Box
            h="100%"
            maxH={{ base: 270, md: 340 }}
            pl={5}
            pr={5}
            flexDir="column"  
        >
            <Flex>
                <ImageBox src={ imagePath } alt={ imageAlt }/>
                <TimelineInfo role={ role } place={ place } color={ color } period={ period } />
            </Flex>
            <ScrollableBox
                mt={[1, 5]}
                h="100%"
                maxH={["150px", "300px"]}
            >
                <Section
                    key={timeline}
                    flexDir="column"
                    alignItems="start"
                >
                    {
                        [ ...facts ].map((fact, index) => (
                            <SectionItem key={index} direction="vert">
                                <TimelineFact>
                                    { fact }
                                </TimelineFact>
                            </SectionItem>
                        ))
                    }
                </Section>
            </ScrollableBox>
        </Box>
    )
}

export default Timeline