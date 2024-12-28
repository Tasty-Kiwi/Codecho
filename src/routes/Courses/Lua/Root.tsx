import { Link, useLocation } from "wouter"
import { Button } from "@/components/ui/button"

export default function LuaCourses() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setLocation] = useLocation()

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-2">Lua Courses</h1>
      <ul className="list-disc">
        <li><Link href="/courses/lua/beginner/about-and-history">About & History of Lua</Link></li>
        <li><Link href="/courses/lua/beginner/printing">Printing things to the console</Link></li>
      </ul>
      {/*<div className="m-2" onClick={() => setLocation("/courses")}>
        <Button>Introduction to Computing</Button>
      </div>
      <div className="m-2" onClick={() => setLocation("/courses/lua")}>
        <Button>Programming with Lua</Button>
      </div>
      <div className="m-2" onClick={() => setLocation("/lua-test")}>
        <Button>Introduction to Version Control with Git</Button>
      </div>*/}
    </div>
  )
}
