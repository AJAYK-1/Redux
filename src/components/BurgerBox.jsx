import React from 'react'
import { orderBurger } from '../Redux/Burger/BurgerActions'
import { connect } from 'react-redux'


function BurgerBox(props) {
    console.log(props)
    return (
        <div>
            <h1> Number of Burger buns available = {props.burgerBuns} </h1>
            <button onClick={props.orderBurger}> Order Burger </button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    burgerBuns: state.burgerBuns
})

const mapDispatchToProps = (dispatch) => ({
    orderBurger: () => dispatch(orderBurger())
})

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBox)