const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunk = require('redux-thunk').thunk
const axios = require('axios')


const FETCH_REQUEST = 'Fetch Request'
const FETCH_SUCCESS = 'Fetch Success'
const FETCH_ERROR = 'Fetch Error'

// Initialize state...
const initialState = {
    loading: false,
    products: [],
    error: false
}

// Actions...
const fetchRequest = () => {
    return { type: FETCH_REQUEST }
}

const fetchSuccess = (products) => {
    return {
        type: FETCH_SUCCESS,
        payload: products
    }
}

const fetchError = () => {
    return { type: FETCH_ERROR }
}

// Reducers...
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST: return {
            ...state,
            loading: true
        }
        case FETCH_SUCCESS: return {
            ...state,
            loading: false,
            products: action.payload
        }
        case FETCH_ERROR: return {
            ...state,
            loading: false,
            error: true
        }
        default: return state
    }
}

// Thunk Action Creator...
const fetchProducts = () => {
    return function (dispatch) {
        dispatch(fetchRequest())
        axios.get(`https://fakestoreapi.com/Products`)
            .then(res => {
                const products = res.data.map(product => product.title)
                dispatch(fetchSuccess(products))
            }).catch(err => {
                dispatch(fetchError())
            })
    }  
}


// Store...
const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))
store.dispatch(fetchProducts())