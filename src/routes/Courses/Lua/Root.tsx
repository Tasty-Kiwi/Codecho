import { useLocation } from "wouter"
import { Button } from "@/components/ui/button"

export default function LuaCourses() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setLocation] = useLocation()

  return (
    <>
      <h1 className="text-4xl font-bold mb-2">Lua Courses</h1>
      {/*<div className="m-2" onClick={() => setLocation("/courses")}>
        <Button>Introduction to Computing</Button>
      </div>
      <div className="m-2" onClick={() => setLocation("/courses/lua")}>
        <Button>Programming with Lua</Button>
      </div>
      <div className="m-2" onClick={() => setLocation("/lua-test")}>
        <Button>Introduction to Version Control with Git</Button>
      </div>*/}
    </>
  )
}
