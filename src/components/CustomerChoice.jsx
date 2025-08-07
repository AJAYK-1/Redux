import React, { useState } from 'react'
import { orderPizza } from './Redux/Pizza/PizzaActions'
import { connect } from 'react-redux'


function CustomerChoice(props) {

    const [pizzanum, setPizzanum] = useState(1)
    // console.log(props)
    
    return (
        <div>
            <h1> customer's choice </h1>
            <h2> Number of available pizza base = {props.pizzaBase} </h2>
            <input type="number" name='pizzanum' placeholder='Enter number of pizzas...'
            onChange={(e) => setPizzanum(e.target.value)} 
            value={pizzanum} />
            <br />
            <button onClick={() => props.orderPizza(pizzanum)}> Order Pizza </button>
        </div>
    )
}

const stateToProps = (state) => ({
    pizzaBase: state.pizza.pizzaBase
})

const dispatchToProps = (dispatch) => ({
    orderPizza: (pizzanum) => dispatch(orderPizza(pizzanum))
})

export default connect(stateToProps, dispatchToProps)(CustomerChoice)