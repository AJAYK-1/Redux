import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pizzaBase: 1000
}

const pizzaSlice = createSlice({
    name: 'Pizza',
    initialState,
    reducers: {
        pizza_order: (state) => {
            state.pizzaBase--
        }
    }
})

console.log(pizzaSlice)

export default pizzaSlice.reducer
export const pizzaAction = pizzaSlice.actions