import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from '../features/pizza/pizzaSlice.js'
import burgerReducer from '../features/burger/burgerSlice.js'
import productReducer from '../features/product/productSllice.js'
import pkg from "redux-logger";

const { createLogger } = pkg
const logger = createLogger()

const store = configureStore({
    reducer: {
        pizza: pizzaReducer,
        burger: burgerReducer,
        product: productReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})


export default store