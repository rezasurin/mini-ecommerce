import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import productsReducer from './reducers/products'

const reducer = combineReducers({productsReducer})
const store = createStore(reducer, applyMiddleware(thunk))
console.log('ini reducer>>', store)

export default store