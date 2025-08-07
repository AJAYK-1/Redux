import { combineReducers } from "redux";
import burgerReducer from "./Burger/BurgerReducer";
import PizzaReducer from "./Pizza/PizzaReducer";
import ProductReducer from "./Products/ProductReducer";


const rootReducer = combineReducers({
    burger: burgerReducer,
    pizza: PizzaReducer,
    product: ProductReducer,
})

export default rootReducer