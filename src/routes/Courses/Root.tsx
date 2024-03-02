import { useLocation } from "wouter"
import { Button } from "@/components/ui/button"

export default function Courses() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setLocation] = useLocation()

  return (
    <>
      <h1 className="text-4xl font-bold mb-2">Courses</h1>
      <div className="m-2" onClick={() => setLocation("/courses/comp-basics")}>
        <Button>Introduction to Computing</Button>
      </div>
      <div className="m-2" onClick={() => setLocation("/courses/lua")}>
        <Button>Programming with Lua</Button>
      </div>
      <div className="m-2" onClick={() => setLocation("/courses/git")}>
        <Button>Introduction to Version Control with Git</Button>
      </div>
    </>
  )
}
