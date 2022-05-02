// import { createStore } from 'redux'
// import CartItems from '../reducers/CartItems'


// export default store = createStore(CartItems)


import { createStore } from 'redux'
import {combineReducers} from 'redux'
import AuthToken from '../reducers/AuthToken'
import CartItems from '../reducers/CartItems'

const rootReducer = combineReducers({
    AuthToken,
    CartItems
})

export default store = createStore(rootReducer)