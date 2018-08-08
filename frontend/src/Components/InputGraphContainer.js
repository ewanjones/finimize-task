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
            <InputGraphSection />
        )
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputGraphContainer)
