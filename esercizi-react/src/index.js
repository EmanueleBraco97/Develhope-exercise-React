import React from 'react';
import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import './index.css'

const container = document.querySelector('#root')
const root = ReactDom.createRoot(container)


// renderizziamo APP component all'interno di BROWSER ROUTER
root.render(
    <BrowserRouter> 
        <App></App>
    </BrowserRouter>
)

    
