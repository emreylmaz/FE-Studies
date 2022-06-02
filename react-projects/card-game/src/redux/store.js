import { configureStore } from '@reduxjs/toolkit'
import cardSlice from './cardSlice'

export const store = configureStore({
    reducer: {
        cardList: cardSlice
    },
})