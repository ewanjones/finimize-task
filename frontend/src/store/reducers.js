import {
    SET_INITIAL,
    SET_INTEREST,
    GET_RESULTS
} from './constants'


let initialState = {
    input: {
        initial: 0,
        interest: 0,
    },
    results: {
        status: null,
        items: []
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIAL: 
            return {
                ...state,
                input: {
                    ...state.input,
                    initial: action.value
                }
            }
        case SET_INTEREST: 
            return {
                ...state,
                input: {
                    ...state.input,
                    interest: action.value
                }
            }
        case GET_RESULTS: 
            return {
                ...state,
                results: {
                    status: action.status,
                    items: action.value
                }
            }
        default:
          return state
    }
}

export default reducer
