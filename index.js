import store from "./app/store.js";
import { pizzaAction } from "./features/pizza/pizzaSlice.js";


console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('Updated State: ', store.getState())
})

store.dispatch(pizzaAction.pizza_order())
unsubscribe()