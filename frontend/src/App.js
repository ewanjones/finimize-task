import React, { Component } from "react"
import InputGraphContainer from './Components/InputGraphContainer'
import "./App.css"

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Finimize dev challenge</h1>
				</header>
                <InputGraphContainer />
			</div>
		)
	}
}

export default App
