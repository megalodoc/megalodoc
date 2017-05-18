import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import petstore from './fixtures/petstore.json'

ReactDOM.render(<App doc={petstore} />, document.getElementById('root'))
