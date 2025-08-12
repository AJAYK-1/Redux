import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pizza_order, customer_choice } from '../../features/pizza/pizzaSlice'
import { burger_order } from '../../features/burger/burgerSlice'


function PizzaBurgerView() {
  const pizzabase = useSelector((state) => state.pizza.pizzaBase)
  const burgerbuns = useSelector((state) => state.burger.burgerBuns)

  const dispatch = useDispatch()

  const [pizzaNum, setPizzaNum] = useState(1)

  return (
    <div>
      <h2> Number of pizza base = {pizzabase} </h2>
      <input type="number" onChange={(e) => setPizzaNum(e.target.value)} placeholder='Enter number of pizza...' />
      <br />
      <button onClick={() => dispatch(customer_choice(pizzaNum))}> Order Pizza </button>
      <h2> Number of burger buns = {burgerbuns} </h2>
      <button onClick={() => dispatch(burger_order())}> Order Buns </button>
    </div>
  )
}

export default PizzaBurgerView