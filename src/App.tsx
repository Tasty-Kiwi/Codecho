import { Route, Switch, Link, useLocation } from "wouter"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

import Index from "./routes/Index"
import NotFound from "./routes/NotFound"
import Courses from "./routes/Courses/Root"
import LuaCourses from "./routes/Courses/Lua/Root"
import CompiuterBasicsCourses from "./routes/Courses/ComputerBasics/Root"
import GitCourses from "./routes/Courses/Git/Root"
import CompiuterBasicsIntro from "./docs/ComputerBasics/Intro.mdx"
import AboutAndHistory from "./docs/Lua/Beginner/AboutAndHistory.mdx"
import Printing from "./docs/Lua/Beginner/Printing.mdx"
import Comments from "./docs/Lua/Beginner/Comments.mdx"

import Logo from "@/assets/Logo.svg"
import LuaPlayground from "./routes/LuaPlayground"

function App() {
  const [_, setLocation] = useLocation()

  return (
    <>
      <Link href="/">
        <img src={Logo} alt="" />
      </Link>
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
          <div className="flex justify-between">
            <Button
              onClick={() =>
                setLocation("/courses/lua/beginner/about-and-history")
              }
            >
              ⬅️ Back
            </Button>
            <Button
              onClick={() => setLocation("/courses/lua/beginner/comments")}
            >
              Next ➡️
            </Button>
          </div>
        </Route>
        <Route path="/courses/lua/beginner/comments">
          <div className="prose prose-invert prose-headings:font-bold">
            <Comments />
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between">
            <Button
              onClick={() =>
                setLocation("/courses/lua/beginner/printing")
              }
            >
              ⬅️ Back
            </Button>
            {/* <Button
              onClick={() => setLocation("/courses/lua/beginner/comments")}
            >
              Next ➡️
            </Button> */}
          </div>
        </Route>
        <Route path="/courses/git" component={GitCourses} />
        <Route path="/lua-playground" component={LuaPlayground} />
        <Route component={NotFound} />
      </Switch>
    </>
  )
}

export default App
