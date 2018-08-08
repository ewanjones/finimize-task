import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './DropdownInput.css'

const intervalOptions = [
    {
        label: 'Monthly',
        value: 'monthly'
    },
    {
        label: 'Quarterly',
        value: 'quarterly'
    },
    {
        label: 'Annually',
        value: 'annually'
    }
]

export default class DropdownInput extends Component {
	handleChange(e) {
		const value = e.target.value
		this.props.onChange(value)
	}

	render() {
		const { value } = this.props

		return (
			<div className={`dropdown-input`}>
				<select
					value={value}
					onChange={this.handleChange.bind(this)}
                >
                    {intervalOptions.map(interval => (                        
                        <option
                            key={interval.value}
                            value={interval.value}
                        >
                            {interval.label}
                        </option>
                    ))}
                </select>
			</div>
		)
	}
}

DropdownInput.propTypes = {
	value: PropTypes.number,
    onChange: PropTypes.func
}
