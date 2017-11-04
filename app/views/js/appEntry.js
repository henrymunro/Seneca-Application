import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './appStore'


import Home from './environment/Home'


const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
    <Home />
</Provider>, app)
