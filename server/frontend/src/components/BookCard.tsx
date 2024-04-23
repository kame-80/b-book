import { FC } from "react";
import { Card, CardBody, Stack, Text, Heading, Image } from '@chakra-ui/react'
import { ProgressMeter } from "./ProgressMeter";

type BCard = {
    title: string;
    progressE: number;
    progressY: number;
    url: string;
};

export const BookCard: FC<BCard> = props => {
    const { title, progressE, progressY, url } = props;

    return (
        <Card maxW="250px" variant="outline" backgroundColor="rgb(204,153,119,0.2)">
            <CardBody>
                <Image
                    src={url}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    boxSize='150px'
                    objectFit='cover'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md' as="u">{title}</Heading>
                    <Text as="b" color="red">進捗度</Text>
                    <Text >遠藤</Text>
                    <ProgressMeter progressValue={progressE} />
                    <Text>八亀</Text>
                    <ProgressMeter progressValue={progressY} />
                </Stack>
            </CardBody>
        </Card>
    );
};