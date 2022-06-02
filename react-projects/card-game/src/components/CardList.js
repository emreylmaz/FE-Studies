import { Box, Center, Grid, GridItem, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { compare, setUnVisibleAllCard, shuffle } from '../redux/cardSlice'
import { Card } from './Card'

export const CardList = () => {

    const items = useSelector((state) => state.cardList.items)
    const selectedItems = useSelector((state) => state.cardList.selectedItems)
    const puan = useSelector((state) => state.cardList.puan)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(shuffle())
        setTimeout(closeCard, 1500);
    }, [])

    useEffect(() => {
        if (selectedItems.length == 2) {
            setTimeout(compareCard, 1000);
        }
    }, [selectedItems])

    function compareCard(arg) {

        dispatch(compare())
    }


    function closeCard(arg) {

        dispatch(setUnVisibleAllCard())
    }

    return (

        <div>
            <Center>

                <Box w='600px' mt="50px">

                    <Heading size='lg' fontSize='50px' mb="10px"> Score {puan}</Heading>

                    <Grid templateColumns='repeat(6, 1fr)' gap={6}>
                        {
                            items.map(((item, index) => (
                                <Card key={index} item={item} />
                            )))
                        }

                    </Grid>
                </Box>
            </Center>

        </div>
    )
}