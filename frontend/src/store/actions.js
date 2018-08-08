import { calculate } from '../API'

import {
    SET_INITIAL,
    SET_MONTHLY,
    SET_INTEREST,
    SET_INTERVAL,
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

export const setInterval = (value) => {
    return {
        type: SET_INTERVAL,
        value: value
    }
}

export const getResults = () => (dispatch, getState) => {
    let initial = getState().input.initial
    let monthly = getState().input.monthly
    let interest = getState().input.interest
    let interval = getState().input.interval

    return calculate(initial, monthly, interest, interval)
        .then(response => {
            if (response.status === 400) {
                return []
            }
            return response
        })
        .then(response => response.data.forecast)
        .then(forecast => {
            dispatch({
                type: GET_RESULTS,
                value: forecast
            })
        })
}
