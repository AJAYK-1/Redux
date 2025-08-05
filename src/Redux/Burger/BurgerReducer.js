import { Order_Burger } from "./BurgerTypes"

const initialState = {
    burgerBuns: 1000
}

const burgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case Order_Burger: return {
            ...state,
            burgerBuns: state.burgerBuns - 1,
        }
        default: return state
    }
}


export default burgerReducer