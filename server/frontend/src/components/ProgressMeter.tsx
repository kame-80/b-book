import { FC } from 'react'
import {
    Box,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderMark,
} from '@chakra-ui/react'

type Meter = {
    progressValue: number;
}

export const ProgressMeter: FC<Meter> = props => {
    const labelStyles = {
        mt: '2',
        ml: '-2.5',
        fontSize: 'sm',
    }

    return (
        <Box p={4} pt={6}>
            <Slider aria-label='slider-ex-6' defaultValue={props.progressValue}>
                <SliderMark value={25} {...labelStyles}>
                    25%
                </SliderMark>
                <SliderMark value={50} {...labelStyles}>
                    50%
                </SliderMark>
                <SliderMark value={75} {...labelStyles}>
                    75%
                </SliderMark>
                <SliderMark
                    value={props.progressValue}
                    textAlign='center'
                    bg='blue.500'
                    color='white'
                    mt='-10'
                    ml='-5'
                    w='12'
                >
                    {props.progressValue}%
                </SliderMark>
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
            </Slider>
        </Box>
    )

}