import React from 'react'
import { orderPizza } from './Redux/Pizza/PizzaActions'
import { connect } from 'react-redux'


function PizzaBox(props) {
    console.log(props)
    return (
        <div>
            <h2> Number of available pizza base = {props.pizzaBase} </h2>
            <button onClick={props.orderPizza}> Order Pizza </button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    pizzaBase: state.pizza.pizzaBase
})

const mapDispatchToProps = (dispatch) => ({
    orderPizza: () => dispatch(orderPizza())
})

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBox)