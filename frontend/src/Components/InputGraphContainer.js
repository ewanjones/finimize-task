import React, { Component } from "react"
import { connect } from 'react-redux'

import InputGraphSection from './InputGraphSection' 

import {
    setInitial,
    setInterest,
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
    initial: String(state.input.initial),
    interest: String(state.input.interest),
    results: state.results.items,
})

const mapDispatchToProps = dispatch => ({
    setInitial: value => {
        dispatch(setInitial(value))
        dispatch(getResults())
    },
    setInterest: value => {
        dispatch(setInterest(value))
        dispatch(getResults())
    },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputGraphContainer)
