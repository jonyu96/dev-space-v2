import { Box, HStack, Circle, Flex, useColorModeValue } from "@chakra-ui/react"
import Terminal from '../components/terminal'
import VoxelBenji from "../components/voxel-benji"
import BorderBox from "../components/border-box"

const TerminalButtons = ({ borderColor }) => (
  <HStack spacing={3} p={3}>
    {
      [ ...Array(3)].map((num, index) => (
        <Circle key={index} w={13} h={13} border="1.75px solid" borderColor={borderColor}/>
      )) 
    }
  </HStack>
)

const Home = () => {
  const borderColor = useColorModeValue('gray.800', 'gray.100')

  return (
    <BorderBox
      flexDirection="column"
      h="100%"
    >
      <TerminalButtons borderColor={borderColor} />
      <Flex 
        flex={1}
        flexDir={['column-reverse', 'row', 'row']}
        p={3}
        pt={0}
      >
        <Box flex={1}>
          <Terminal />
        </Box>
        <Box flex={1}>
          <VoxelBenji />
        </Box>
      </Flex>
    </BorderBox>
  )
}

export default Home