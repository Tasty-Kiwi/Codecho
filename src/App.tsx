import { Route, Switch } from "wouter"

import Index from "./routes/Index"
import NotFound from "./routes/NotFound"

function App() {
  return (
    <Switch>
      <Route path="/" component={Index} />
      <Route component={NotFound}/>
    </Switch>
  )
}

export default App
