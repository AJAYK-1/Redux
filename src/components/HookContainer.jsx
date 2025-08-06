import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderBurger } from './Redux/Burger/BurgerActions';
import { orderPizza } from './Redux/Pizza/PizzaActions';


function HookContainer() {

    const burgerBuns = useSelector(state => state.burger.burgerBuns)
    console.log(burgerBuns);
    const pizzaBase = useSelector(state => state.pizza.pizzaBase)
    console.log(pizzaBase)
    const dispatch = useDispatch()


    return (
        <div>
            <h2> Number of Burger buns available = {burgerBuns} </h2>
            <button onClick={() => dispatch(orderBurger())}> Order Burger </button>
            <h2> Number of Pizza Base available = {pizzaBase} </h2>
            <button onClick={() => dispatch(orderPizza())}> Order Burger </button>
        </div>
    )
}


export default HookContainer