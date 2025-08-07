import axios from "axios";
import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./ProductTypes";



export const fetchRequest = () => ({
    type: FETCH_REQUEST
})

export const fetchSuccess = (product) => ({
    type: FETCH_SUCCESS,
    payload: product
})

export const fetchError = (error) => ({
    type: FETCH_ERROR,
    payload: error
})

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchRequest())
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                const products = res.data.map(product => product.title)
                dispatch(fetchSuccess(products))
                console.log(products)
            })
            .catch(err => {
                const errorMessage = err.message
                dispatch(fetchError(errorMessage))
            })
    }
}