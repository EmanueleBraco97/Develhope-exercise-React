import {combineReducer, createStore} from 'redux'
import {counterReducer} from './CounterReducer'

const rootReducer = combineReducer({
    counter : counterReducer,
})

export const store = createStore(rootReducer)