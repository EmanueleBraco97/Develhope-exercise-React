import {combineReducers, createStore} from 'redux'
import {counterReducer} from './CounterReducer'
import { todoReducer } from './TodosReducer'

const rootReducer = combineReducers({
    counter : counterReducer,
    todos : todoReducer
})

export const store = createStore(rootReducer)