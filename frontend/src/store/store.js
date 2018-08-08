import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk';

import reducer from './reducers'


const store = createStore(
    reducer,
    applyMiddleware(logger),
    applyMiddleware(thunk)
)


export default store
