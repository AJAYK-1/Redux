import { combineReducers } from "redux";
import burgerReducer from "./Burger/BurgerReducer";
import PizzaReducer from "./Pizza/PizzaReducer";


const rootReducer = combineReducers({
    burger: burgerReducer,
    pizza: PizzaReducer
})

export default rootReducer