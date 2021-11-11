import { Box, Center } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../navbar'
import Sidebar from '../sidebar'
import Footer from '../footer'

const Layout = ({ children, router }) => {

    return (
        <Center 
            position="relative"
            as="main"  
            h="100vh"
            minW={375}
            p={{ base: 3 }}
        >
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Jon's Dev Space" />
                <meta name="author" content="Jonathan Yu" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            </Head>
            <Navbar path={router.asPath}/>
            <Sidebar />
            <Box
                h={["80%", "80%", "400px"]}
                w={["100%", "90%", "container.md"]}
            >    
                { children }
            </Box>
            <Footer />
        </Center>
    )
}

export default Layout