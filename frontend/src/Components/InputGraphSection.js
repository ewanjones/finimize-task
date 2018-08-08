import React, { Component } from "react"
import CurrencyInput from "./CurrencyInput"
import SliderInput from "./SliderInput"
import DropdownInput from "./DropdownInput"
import DisplayGraph from "./DisplayGraph"
import "./InputGraphSection.css"

export default class InputGraphSection extends Component {
  render() {
      const {
          initial,
          monthly,
          interest,
          interval,
          results,
          setInitial,
          setMonthly,
          setInterest,
          setInterval,
      } = this.props

    return (
      <div>
        <div className="financial-inputs">
          <p className="input-label">How much have you saved?</p>
          <CurrencyInput 
                value={initial} 
                onChange={setInitial}
            />

          <p className="input-label">How much will you save each month?</p>
          <CurrencyInput 
                value={monthly} 
                onChange={setMonthly}
            />

          <p className="input-label">
            How much interest will you earn per year?
          </p>
          <SliderInput 
            value={interest} 
            onChange={setInterest}
          />

          <p className="input-label">
            How regularly will interested be paid?
          </p>
          <DropdownInput
            value={interval} 
            onChange={setInterval}
          />
        </div>

        <div className="financial-display">
          {/*We have included some sample data here, you will need to replace this
            with your own. Feel free to change the data structure if you wish.*/}
          <DisplayGraph
            data={results}
          />
        </div>
      </div>
    )
  }
}
