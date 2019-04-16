import { createStore, combineReducers, applyMiddleware } from 'redux'

import reducers from './reducers'
import middleware from './middleware'
import saga from './sagas/'

export default createStore(
    combineReducers({
        ...reducers
    }),
    applyMiddleware(...middleware)
)

middleware[0].run(saga);