
import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggle = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
            style={{ display: 'inline-block' }}
            key={useColorModeValue('light', 'dark')}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <IconButton
                aria-label="Toggle theme"
                icon={useColorModeValue(<MoonIcon w={4} h={4} />, <SunIcon w={4} h={4} />)}
                onClick={toggleColorMode}
                bg={useColorModeValue('#1A365D', '#D5AE22')}
                color="White"
                _hover={{ bg: useColorModeValue('#285189', '#E5C141') }}
                variant="ghost"
                size="sm"
                pl={4}
                pr={4}
                borderRadius={3}
                h={25}
            ></IconButton>
        </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggle