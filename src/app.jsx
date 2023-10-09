import { Route, Switch } from 'wouter'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export function App () {
  return (
    <>
      <Switch>
        <Route path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </>
  )
}
