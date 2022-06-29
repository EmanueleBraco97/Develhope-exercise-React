import {combineReducer, createStore} from 'redux'
import {counterReducer} from './CounterReducer'
import { todoReducer } from './TodosReducer'

const rootReducer = combineReducer({
    counter : counterReducer,
    todos : todoReducer
})

export const store = createStore(rootReducer)