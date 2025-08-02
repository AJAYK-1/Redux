const redux = require('redux');
const createStore = redux.createStore;


const ORDER_BURGER = 'Order Burger'

// Action...
// const action = {
//     type: ORDER_BURGER,
//     shop_name: 'Burger Shop'
// }

// Action Creator...
function orderBurger() {
    return {
        type: ORDER_BURGER,
        payload: 90
    }
}

// Reducer...
const initialState = {
    burgerCount: 100,
    patty: ['chicken', 'beef']
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_BURGER: return {
            ...state,
            burgerCount: state.burgerCount - 1
        }
        default: return state
    }
}

// Store...
const store = createStore(Reducer)

// getState for accessing current state...
console.log(store.getState())

// listeners are updated using subcribe..
const unSubscibe = store.subscribe(() => console.log('Updated State: ', store.getState()))

// State is updated using dispatch...
store.dispatch(orderBurger())
unSubscibe()
