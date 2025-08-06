import React from 'react'
import { orderBurger } from './Redux/Burger/BurgerActions'
import { connect } from 'react-redux'


function BurgerBox(props) {
    console.log(props)
    return (
        <div>
            <h2> Number of Burger buns available = {props.burgerBuns} </h2>
            <button onClick={props.orderBurger}> Order Burger </button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    burgerBuns: state.burger.burgerBuns
})

const mapDispatchToProps = (dispatch) => ({
    orderBurger: () => dispatch(orderBurger())
})

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBox)