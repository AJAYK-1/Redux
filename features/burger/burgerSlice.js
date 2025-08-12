import { createSlice } from "@reduxjs/toolkit"
import { pizza_order } from "../pizza/pizzaSlice.js"

const initialState = {
    burgerBuns: 200
}

const burgerSlice = createSlice({
    name: 'Burger',
    initialState,
    reducers: {
        burger_order: (state) => {
            state.burgerBuns--
        }
    },
    extraReducers: (builder) => {
        builder.addCase(pizza_order, (state) => {
            state.burgerBuns--
        })
    }
})

console.log(burgerSlice);

export default burgerSlice.reducer
export const { burger_order } = burgerSlice.actions