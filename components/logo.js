import Link from 'next/link'
import { Box, Text, Image, useColorModeValue } from '@chakra-ui/react'

const Logo = () => {
    const tennisBall = '/images/logo.png'

    return (
        <Link href="/">
            <Box
                cursor="pointer"
                display="inline-flex"  
                alignItems="center"
                fontWeight="bold"
            >
                {/* <TennisBall /> */}
                <Image src="/images/tennis-ball.png" boxSize="20px" alt="tennis ball"/>
                <Text
                    color={useColorModeValue('gray.800', 'gray.100')}
                    ml={2}
                >
                    Jonathan Yu.
                </Text>
            </Box>
        </Link>
    )
}

export default Logo