import { Order_Burger } from "./BurgerTypes"

const initialStateOfBurger = {
    burgerBuns: 200
}

const burgerReducer = (state = initialStateOfBurger, action) => {
    switch (action.type) {
        case Order_Burger: return {
            ...state,
            burgerBuns: state.burgerBuns - 1,
        }
        default: return state
    }
}


export default burgerReducer