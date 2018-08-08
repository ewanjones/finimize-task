import React, { Component } from "react"
import { calculate } from "./API"
import InputGraphContainer from './Components/InputGraphContainer'
import "./App.css"

class App extends Component {
	state = {
		loading: false,
		result: null
	}

	render() {
	    const {loading, result} = this.state

		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Finimize dev challenge</h1>
				</header>
                    {loading ?
                        'Loading...'
                    :
					 	<InputGraphContainer />
                    }
			</div>
		)
	}
}

export default App
