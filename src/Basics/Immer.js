import { createStore } from "redux"
import { produce } from "immer"


const SAUCE_UPDATE = 'Sauce Update'

const initialState = {
    type: 'Non-Veg',
    ingredients: {
        bread: 'Whole Grain',
        filling: 'Tommato and Lettuce',
        sauce: 'Mustard'
    }
}

const updateSauce = (sauce) => ({
    type: SAUCE_UPDATE,
    payload: sauce
})

const SandwichReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAUCE_UPDATE: return produce(state, (draft) => {
            draft.ingredients.sauce = action.payload
        })
        // return {
        //     ...state,
        //     ingredients: {
        //         ...state.ingredients,
        //         sauce: action.payload
        //     }
        // }
        default: return state
    }
}


const store = createStore(SandwichReducer)
console.log('Initial state: ', store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('Updated State: ', store.getState())
})

store.dispatch(updateSauce('tommato'))
unsubscribe()