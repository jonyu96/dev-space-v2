import { Box, Container, Center, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../navbar'
import Sidebar from '../sidebar'
import Footer from '../footer'

const Layout = ({ children, router }) => {
    const bg = useColorModeValue('#E2E8F0', '#4A5568')

    return (
        <Box 
            as="main"  
            h="100vh"
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
            <Center h="100%">
                <Container
                    maxW="container.lg"
                    h={['calc(100% - 200px)', '50%']}
                >    
                    { children }
                </Container>
            </Center>
            <Footer />
        </Box>
    )
}

export default Layout