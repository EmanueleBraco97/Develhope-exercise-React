import ReactDom from 'react-dom/client'
import { App } from './App'
import { incrementCounter } from './state/CounterReducer'
import {store} from './state/Store'

store.dispatch(incrementCounter(10))


const container = document.querySelector('#root')
const root = ReactDom.createRoot(container)

// root.render(<App></App>)
