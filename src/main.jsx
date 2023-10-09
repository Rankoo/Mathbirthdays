import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/*',
    element: <NotFound />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
