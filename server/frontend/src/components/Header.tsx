import { FC } from "react";
import { Box } from "@chakra-ui/react"
import { Heading } from '@chakra-ui/react'

type Head = {
    title: string;
}

export const Header:FC<Head> = (props) => {
    const {title} = props;
    return (
        <Box bg='grey' w='100%' p={4} color='white'>
                <Heading>{title}</Heading>
        </Box>
    )
}