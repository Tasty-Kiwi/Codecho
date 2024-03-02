import { Route, Switch } from "wouter"

import Index from "./routes/Index"
import NotFound from "./routes/NotFound"
import Courses from "./routes/Courses/Root"
import LuaTest from "./routes/LuaTest"
import LuaCourses from "./routes/Courses/Lua/Root"
import CompiuterBasicsCourses from "./routes/Courses/ComputerBasics/Root"
import GitCourses from "./routes/Courses/Git/Root"

function App() {
  return (
    <Switch>
      <Route path="/" component={Index} />
      <Route path="/courses" component={Courses} />
      <Route path="/courses/lua" component={LuaCourses} />
      <Route path="/courses/comp-basics" component={CompiuterBasicsCourses} />
      <Route path="/courses/git" component={GitCourses} />
      <Route path="/lua-test" component={LuaTest} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default App
