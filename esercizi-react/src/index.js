import ReactDom from 'react-dom/client'
import { App } from './App'
import { incrementCounter } from './state/CounterReducer'
import {store} from './state/Store'
import {add, remove, edit} from './state/TodosReducer'

store.dispatch(incrementCounter(10))

store.dispatch(add({id: 1, title: 'FRONTEND', completed: true}))
store.dispatch(add({id: 2, title: 'BACKEND', completed: false}))
store.dispatch(edit(2, {completed: true}))
store.dispatch(remove(1))


const container = document.querySelector('#root')
const root = ReactDom.createRoot(container)

// root.render(<App></App>)
