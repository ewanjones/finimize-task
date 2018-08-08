import React, { Component } from "react"
import CurrencyInput from "./CurrencyInput"
import SliderInput from "./SliderInput"
import DisplayGraph from "./DisplayGraph"
import "./InputGraphSection.css"

export default class InputGraphSection extends Component {
  render() {
      const {
          intial,
          interest,
          results,
          setInitial,
          setInterest,
          getResults,
      } = this.props

    return (
      <div>
        <div className="financial-inputs">
          <p className="input-label">How much have you saved?</p>
          <CurrencyInput 
                value={intial} 
                onChange={setInitial}
            />

          <p className="input-label">How much will you save each month?</p>
          <CurrencyInput defaultValue={0} />

          <p className="input-label">
            How much interest will you earn per year?
          </p>
          <SliderInput 
            value={interest} 
            onChange={setInterest}
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
