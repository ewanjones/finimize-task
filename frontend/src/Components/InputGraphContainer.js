import React, { Component } from "react"
import { connect } from 'react-redux'

import InputGraphSection from './InputGraphSection' 

import {
    setInitial,
    setMonthly,
    setInterest,
    setInterval,
    getResults
} from '../store/actions'


class InputGraphContainer extends Component {
    render() {
        return (
            <InputGraphSection {...this.props} />
        )
    }
}


const mapStateToProps = state => ({
    initial: state.input.initial,
    monthly: state.input.monthly,
    interest: state.input.interest,
    interval: state.input.interval,
    results: state.results,
})

const mapDispatchToProps = dispatch => ({
    setInitial: value => {
        dispatch(setInitial(value))
        dispatch(getResults())
    },
    setMonthly: value => {
        dispatch(setMonthly(value))
        dispatch(getResults())
    },
    setInterest: value => {
        dispatch(setInterest(value))
        dispatch(getResults())
    },
    setInterval: value => {
        dispatch(setInterval(value))
        dispatch(getResults())
    },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputGraphContainer)
