import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './CurrencyInput.css'

export default class CurrencyInput extends Component {
	handleChange(e) {
		const value = e.target.value
		this.props.onChange(value)
	}

	render() {
		const { value } = this.props

		return (
			<div className={`currency-input`}>
				<span>£</span>
				<input type="text"
					value={value}
					onChange={this.handleChange.bind(this)}
                />
			</div>
		)
	}
}

CurrencyInput.propTypes = {
	value: PropTypes.number,
    onChange: PropTypes.func
}
