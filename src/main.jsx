import { render } from 'preact'
import { App } from './app.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
render(
  <BrowserRouter basename={import.meta.env.DEV ? '/' : '/mathbirthdays/'}>
    <App />
  </BrowserRouter>,
  document.getElementById('app'))
