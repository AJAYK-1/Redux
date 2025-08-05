const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware


const ORDER_BURGER = 'Order Burger'
const ORDER_PIZZA = 'Order Pizza'

// Action Creator...
function orderBurger() {
    return {
        type: ORDER_BURGER,
        payload: 90
    }
}

function orderPizza() {
    return {
        type: ORDER_PIZZA,
        payload: 100
    }
}

// Initalizing state...
const initialStateforBurger = {
    burgerCount: 100,
}

const initialStateforPizza = {
    pizzaCount: 50
}

// Reducers...
const ReducerBurger = (state = initialStateforBurger, action) => {
    switch (action.type) {
        case ORDER_BURGER: return {
            ...state,
            burgerCount: state.burgerCount - 1
        }
        default: return state
    }
}

const ReducerPizza = (state = initialStateforPizza, action) => {
    switch (action.type) {
        case ORDER_PIZZA: return {
            ...state,
            pizzaCount: state.pizzaCount - 1
        }
        default: return state
    }
}

// Store...
const rootReducer = combineReducers({
    ReducerBurger,
    ReducerPizza
})
const store = createStore(rootReducer,applyMiddleware(logger))

// getState for accessing current state...
console.log('Initial State: ', store.getState())

// listeners are updated using subcribe..
const unSubscibe = store.subscribe(() => console.log('Updated State: ', store.getState()))

// State is updated using dispatch...
store.dispatch(orderBurger())
store.dispatch(orderPizza())
unSubscibe()