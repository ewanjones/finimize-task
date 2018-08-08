import { calculate } from '../API'

import {
    SET_INITIAL,
    SET_MONTHLY,
    SET_INTEREST,
    GET_RESULTS
} from './constants'


export const setInitial = (value) => {
    return {
        type: SET_INITIAL,
        value: value
    }
}

export const setMonthly = (value) => {
    return {
        type: SET_MONTHLY,
        value: value
    }
}

export const setInterest = (value) => {
    return {
        type: SET_INTEREST,
        value: value
    }
}

export const getResults = () => (dispatch, getState) => {
    let initial = getState().input.initial
    let monthly = getState().input.monthly
    let interest = getState().input.interest

    if (![initial, monthly, interest].every(x => x)) {
        return
    }

    return calculate(initial, monthly, interest)
        .then(response => {
            return response
        })
        .then(response => response.data.forecast)
        .then(forecast => {
            dispatch({
                type: GET_RESULTS,
                status: 'success',
                value: forecast
            })
        })
}
