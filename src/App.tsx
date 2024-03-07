import { Route, Switch, useLocation } from "wouter"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

import Index from "./routes/Index"
import NotFound from "./routes/NotFound"
import Courses from "./routes/Courses/Root"
import LuaCourses from "./routes/Courses/Lua/Root"
import CompiuterBasicsCourses from "./routes/Courses/ComputerBasics/Root"
import GitCourses from "./routes/Courses/Git/Root"
import CompiuterBasicsIntro from "./docs/ComputerBasics/Intro.mdx"
import Printing from "./docs/Lua/Beginner/Printing.mdx"
import AboutAndHistory from "./docs/Lua/Beginner/AboutAndHistory.mdx"

function App() {
  const [_, setLocation] = useLocation()

  return (
    <Switch>
      <Route path="/" component={Index} />
      <Route path="/courses" component={Courses} />
      <Route path="/courses/lua" component={LuaCourses} />
      <Route path="/courses/comp-basics" component={CompiuterBasicsCourses} />
      <Route path="/courses/comp-basics/intro">
        <div className="prose prose-invert prose-headings:font-bold">
          <CompiuterBasicsIntro />
        </div>
      </Route>
      <Route path="/courses/lua/beginner/about-and-history">
        <div className="prose prose-invert prose-headings:font-bold">
          <AboutAndHistory />
        </div>
        <Separator className="my-2" />
        <Button onClick={() => setLocation("/courses/lua/beginner/printing")}>
          Next ➡️
        </Button>
      </Route>
      <Route path="/courses/lua/beginner/printing">
        <div className="prose prose-invert prose-headings:font-bold">
          <Printing />
        </div>
        <Separator className="my-2" />
        <Button
          onClick={() => setLocation("/courses/lua/beginner/about-and-history")}
        >
          ⬅️ Back
        </Button>
      </Route>
      <Route path="/courses/git" component={GitCourses} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default App
