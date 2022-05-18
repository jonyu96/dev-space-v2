import {
    Flex,
    Text,
    Container,
    Wrap,
    HStack,
    Tag,
    Image,
    Icon,
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useColorModeValue
} from '@chakra-ui/react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

import Section from './section'
import SectionItem from './section-item'
import ExternalLink from './external-link'

import { WebFrame, MobileFrame } from './frame'

const ProjectView = ({ isOpen, onClose, project }) => {
  const borderColor = useColorModeValue('gray.800', 'gray.100')
  const bg = useColorModeValue('gray.300', 'gray.600')
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent pt={5} pb={5} pl={8} pr={8}>
        <ModalCloseButton _focus={{ boxShadow: 'none' }} left={2} boxSize="20px" fontSize="10px"/>
        <ModalHeader
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          borderBottom="2px dotted"
          borderColor={borderColor}
          fontWeight="regular"
          pl={0}
          pr={0}
          pt={3}
          pb={1}
        >
          <Flex alignItems="center">
            <Text fontSize={{ base: "xs", md: "lg" }} fontWeight="bold">{ project['name'] }</Text>
          </Flex>
          <Flex alignItems="center">
            <Text fontSize="xs" fontWeight="bold" color={project['color']}>{ project['company'] }</Text>
            <Text fontSize="xs" ml={2} mr={2}>|</Text>
            <Text fontSize="xs" fontWeight="bold">{ project['year'] }</Text>
          </Flex>
        </ModalHeader>
        <ModalBody 
          pt={[0, 5]}
          pr={0}
          pl={0}
        >
          <Section w="100%" display="grid" gridTemplateColumns={["1fr", "1fr 1fr"]} gridTemplateRows={[".8fr 1fr", "1fr"]}  gridGap={[3, 10]} h="100%"
          >
            <SectionItem direction="vert">
                <Container
                  maxW="100%"
                  p={0}
                  fontSize={["10px", "xs"]}
                  textAlign="justify"
                >
                  <Flex flex={1} mb={2} alignItems="center" justifyContent="space-between">
                    <Text variant="key">Overview</Text>
                    <HStack spacing={1}>
                      {/* <ExternalLink mr={3} href={ 'source' in project ? project['source'] : null } isExternal={true}>
                        <Icon as={FiGithub} boxSize={{ base: "15px", md: "15px", lg: "17px" }}/>
                      </ExternalLink>
                      <ExternalLink href={ 'link' in project ? project['link'] : null } isExternal>
                        <Icon as={FiExternalLink} boxSize={{ base: "15px", md: "15px", lg: "17px" }}/>
                      </ExternalLink> */}
                    </HStack>
                  </Flex>
                  { project['overview'] }
                </Container>
            </SectionItem>
            <SectionItem direction="vert">
                <Box h="100%" display="flex" alignItems="center" justifyContent="center">
                  {
                    project['platform']==='web' ? (
                      <WebFrame>
                        <Image maxH={['175px', '300px']} src={project['screenshot']} alt="web app screenshot" />
                      </WebFrame>
                    ) : (
                      <MobileFrame>
                        <Image maxH={['100px', '200px']} src={project['screenshot']} alt="mobile app screenshot" />
                      </MobileFrame>
                    )
                  }
                </Box>
            </SectionItem>
          </Section>
        </ModalBody>
        <ModalFooter pl={0} pr={0} display="flex" flexDir={["column", "row"]} alignItems={["flex-start", "center"]}>
          <Text fontSize={['10px', 'xs']} fontWeight="medium" mr={[2, 3]} mb={[3, 0]}>Built With:</Text>
          <Section flex={1}>
            <Wrap spacing={[2, 2]} shouldWrapChildren>
              {
                [ ...project['tags']].map((tag, index) => (
                  <SectionItem key={index}>
                    <Tag size="sm" fontSize={{ base: "x-small" }} borderRadius={2} border="2px solid" borderColor={borderColor}
                      color={borderColor} bg={bg}
                    >
                      { tag }
                    </Tag>
                  </SectionItem>
                ))
              }
            </Wrap>
          </Section>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ProjectView