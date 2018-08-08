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
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case '':
            return
        default:
          return state
    }
}

export default reducer
