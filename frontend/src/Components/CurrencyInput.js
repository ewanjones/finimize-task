import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './CurrencyInput.css'

export default class CurrencyInput extends Component {
	constructor(props) {
		super(props)

		this.state = {
			hasFocus: false,
			value: props.defaultValue
		}
	}

	handleChange(e) {
		const value = e.target.value
		this.props.onChange(value)
	}

	handleFocus(e) {
		this.setState({
			hasFocus: true
		})
	}

	render() {
		const { value } = this.props

		return (
			<div className={`currency-input`}>
				<span>£</span>
				<input type="text"
					value={value}
					onChange={this.handleChange.bind(this)}
					onFocus={this.handleFocus.bind(this)}/>
			</div>
		)
	}
}

CurrencyInput.propTypes = {
	defaultValue: PropTypes.number
}
