import { useState } from 'react'
import { Box, Text, Grid, Flex, SimpleGrid, useStyleConfig } from '@chakra-ui/react'

import TimelinePicker from '../components/timeline-picker'
import Timeline from '../components/timeline'
import TechnologyPicker from '../components/technology-picker'
import TechnologyStats from '../components/technology-stats'

import BorderBox from '../components/border-box'

export default function Experience() {

  const [timeline, setTimeline] = useState("UW")
  const [technology, setTechnology] = useState("Angular")

  function setTimelineHandler(selectedTimeline) {
    setTimeline(selectedTimeline)
  }

  function setTechnologyHandler(selectedTechnology) {
    setTechnology(selectedTechnology)
  }

  return (
    <Box
      h="100%"
      w="100%"
      display="flex"
      flexDirection={{ base: 'column', md: 'row' }}
    >
      <Box display="flex" flex={[1, 2]} flexDirection="column" mr={{ base: 0, md: 3 }} mb={{ base: 3, md: 0 }} p={3}>
        <Text fontSize={15} fontWeight="semibold" mb={3}>Timeline</Text>
        <Grid flex={1} templateColumns={["25% 75%", "15% 80%"]} columnGap={['5%']}>
          <TimelinePicker selectedTimeline={timeline} setTimeline={ setTimelineHandler } />
          <Timeline timeline={timeline} />
        </Grid>
      </Box>

      <BorderBox flex={1} p={3} flexDirection="column">
        <Text fontSize={15} fontWeight="semibold">Tech-Dex</Text>
        <SimpleGrid flex={1} templateRows="1fr 1.5fr">
          <TechnologyPicker setTechnology={ setTechnologyHandler } />
          <TechnologyStats technology={technology} />
        </SimpleGrid>
      </BorderBox>
    </Box>
  )
}
  