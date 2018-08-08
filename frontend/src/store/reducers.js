import {
    SET_INITIAL,
    SET_MONTHLY,
    SET_INTEREST,
    SET_INTERVAL,
    GET_RESULTS
} from './constants'


let initialState = {
    input: {
        initial: "0",
        monthly: "0",
        interest: "0",
        interval: "monthly",
    },
    results: []
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
        case SET_MONTHLY: 
            return {
                ...state,
                input: {
                    ...state.input,
                    monthly: action.value
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
        case SET_INTERVAL: 
            return {
                ...state,
                input: {
                    ...state.input,
                    interval: action.value
                }
            }
        case GET_RESULTS: 
            return {
                ...state,
                results: action.value
            }
        default:
          return state
    }
}

export default reducer
