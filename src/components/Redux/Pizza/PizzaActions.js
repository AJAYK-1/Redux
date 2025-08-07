import { Order_Pizza } from './PizzaTypes'


export const orderPizza = (pizzanum = 1) => ({
    type: Order_Pizza,
    payload: pizzanum
})
