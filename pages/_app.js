import { ChakraProvider } from "@chakra-ui/react"
import Fonts from "../components/fonts"
import Layout from "../components/layouts/layout"
import theme from "../lib/theme"
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
          <Component {...pageProps} key={router.route}></Component>
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
