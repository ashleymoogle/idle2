import React from 'react' // eslint-disable-line
import ReactDOM from 'react-dom'
import ready from 'document-ready-promise'

import ReactContainer from './components/ReactContainer'
import {browserHistory} from 'react-router'

import Store from './store/store.js'

// Create Store and populate with data
const store = new Store()
store.history = browserHistory

store.init()
    .then(ready)
    .then(() => {
        ReactDOM.render((
            <ReactContainer store={store}/>
        ), document.getElementById('mount'))
    })

window.store = store
