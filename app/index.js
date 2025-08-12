// import store from "./store.js";
// // import { pizzaAction } from "./features/pizza/pizzaSlice.js";
// // import { burgerAction } from "./features/burger/burgerSlice.js";
// import { FetchProducts } from "../features/product/productSllice.js";


// console.log('Initial State', store.getState());

// const unsubscribe = store.subscribe(() => {
//     console.log('Updated State: ', store.getState())
// })

// // store.dispatch(pizzaAction.pizza_order())
// // store.dispatch(burgerAction.burger_order())
// // store.dispatch(burgerAction.burger_order())
// // store.dispatch(pizzaAction.pizza_order())
// // store.dispatch(pizzaAction.pizza_order())
// store.dispatch(FetchProducts()).then(() => {
//     console.log('Final state: ', store.getState());
// })

// unsubscribe()