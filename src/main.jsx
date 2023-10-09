import { render } from 'preact'
import { App } from './app.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
render(
  <BrowserRouter basename='/mathbirthdays/'>
    <App />
  </BrowserRouter>,
  document.getElementById('app'))
