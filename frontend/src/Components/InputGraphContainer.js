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
    initial: state.input.initial,
    interest: state.input.interest,
    results: state.input.results,
})

const mapDispatchToProps = dispatch => ({
    setInitial: value => dispatch(setInitial(value)),
    setInterest: value => dispatch(setInterest(value)),
    getResults: () => dispatch(getResults())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputGraphContainer)
