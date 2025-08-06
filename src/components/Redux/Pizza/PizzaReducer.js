import { Order_Pizza } from './PizzaTypes'


const initialStateOfPizza = {
    pizzaBase: 100
}

const PizzaReducer = (state = initialStateOfPizza, action) => {
    switch (action.type) {
        case Order_Pizza: return {
            ...state,
            pizzaBase: state.pizzaBase - 1
        }
        default: return state
    }
}


export default PizzaReducer