import { createStore } from 'redux'
import burgerReducer from './Burger/BurgerReducer'


const store = createStore(burgerReducer)

export default store;