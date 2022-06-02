import { Image, GridItem, Box, Center } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSelectedItems, compare, setVisible } from '../redux/cardSlice'

const notVisibleImg = "https://i.pinimg.com/originals/05/fb/25/05fb258146be22db8765131a610c5ef2.jpg"

export const Card = ({ item }) => {

    const selectedItems = useSelector((state) => state.cardList.selectedItems)

    const dispatch = useDispatch()

    const handleOnClick = (item) => {

        if (selectedItems.length < 2 && item.visible == false) {
            dispatch(setVisible(item.id))
            dispatch(addSelectedItems(item))
        }
    }

    return (

        <div>
            <GridItem >
                <Box>
                    <Image onClick={() => handleOnClick(item)} w='100px' h='110px' src={item.visible ? item.image : notVisibleImg} />
                </Box>
            </GridItem>
        </div>

    )
}