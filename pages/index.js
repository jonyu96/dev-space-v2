
import { Box, HStack, Circle, Flex, Center, useStyleConfig, useColorModeValue } from "@chakra-ui/react"
import Terminal from '../components/terminal'
import VoxelBenji from "../components/voxel-benji"

const TerminalButtons = () => (
  <HStack spacing={3} p={3}>
    {
      [ ...Array(3)].map((num, index) => (
        <Circle key={index} w={13} h={13} border="2px solid" borderColor={useColorModeValue('gray.800', 'gray.100')}/>
      )) 
    }
  </HStack>
)

const Home = () => {
  const styles = useStyleConfig("BorderBox")

  return (
    <Box
      flexDirection="column"
      pb={3}
      __css={styles}
    >
      <TerminalButtons width={13} height={13} />

      <Flex
        h="100%"
        w="100%"
        pl={3}
        pr={3}
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        <Box flex={1}>
          <Terminal />
        </Box>
        <Box flex={1} display="flex" alignItems="center" justifyContent="center">
          <VoxelBenji/>
        </Box>
      </Flex>
    </Box>
  )
}

export default Home