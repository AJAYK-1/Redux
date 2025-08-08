import { configureStore } from "@reduxjs/toolkit";
import pizzareducer from '../features/pizza/pizzaSlice.js'


const store = configureStore({
    reducer: {
        pizza: pizzareducer
    }
})


export default store