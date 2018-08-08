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
			<div className={`dropdown-input`}>
				<select
					value={value}
					onChange={this.handleChange.bind(this)}
					onFocus={this.handleFocus.bind(this)}
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
	defaultValue: PropTypes.number
}
