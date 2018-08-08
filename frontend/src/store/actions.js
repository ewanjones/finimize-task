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
    let interest = getState().input.interest

    console.log('calculating..')

    return calculate(initial, interest)
        .then(response => {
            return response.data.forecast
        })
        .then(forecast => {
            dispatch({
                type: GET_RESULTS,
                status: 'success',
                value: forecast
            })
        })
}
