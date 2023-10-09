import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/*',
    element: <NotFound />
  }
]
const router = createBrowserRouter(routes, { basename: '/mathbirthdays/' })

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App