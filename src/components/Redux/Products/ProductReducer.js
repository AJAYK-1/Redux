import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./ProductTypes"


const initialState = {
    loading: false,
    product: [],
    error: false
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST: return {
            ...state,
            loading: true,
        }
        case FETCH_SUCCESS: return {
            ...state,
            loading: false,
            product: action.payload
        }
        case FETCH_ERROR: return {
            ...state,
            loading: false,
            error: action.payload
        }
        default: return state
    }
}

export default ProductReducer