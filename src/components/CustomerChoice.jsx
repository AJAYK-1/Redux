import React from 'react'
import { orderPizza } from './Redux/Pizza/PizzaActions'
import { connect } from 'react-redux'


function CustomerChoice(props) {
    console.log(props)
    return (
        <div>
            <h2> Number of available pizza base = {props.pizzaBase} </h2>
            <button onClick={props.orderPizza}> Order Pizza </button>
        </div>
    )
}

const stateToProps = (state) => ({
    pizzaBase: state.pizza.pizzaBase
})

const dispatchToProps = (dispatch) => ({
    orderPizza: () => dispatch(orderPizza())
})

export default connect(stateToProps, dispatchToProps)(CustomerChoice)