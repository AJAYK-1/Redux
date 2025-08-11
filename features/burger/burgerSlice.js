import { createSlice } from "@reduxjs/toolkit"
import { pizzaAction } from "../pizza/pizzaSlice.js"

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
        builder.addCase(pizzaAction.pizza_order, (state) => {
            state.burgerBuns--
        })
    }
})

console.log(burgerSlice);

export default burgerSlice.reducer
export const burgerAction = burgerSlice.actions