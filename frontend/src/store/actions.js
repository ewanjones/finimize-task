import {
    SET_INITIAL,
    SET_INTEREST,
    GET_RESULTS
} from './constants'


export const setInitial = (value) => {
    return {
        type: SET_INITIAL,
        value: value
    }
}

export const setInterest = (value) => {
    return {
        type: SET_INTEREST,
        value: value
    }
}

export const getResults = () => {
    return
}
