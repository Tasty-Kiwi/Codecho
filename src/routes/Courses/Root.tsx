import { useLocation } from "wouter"
import { Button } from "@/components/ui/button"

export default function Courses() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setLocation] = useLocation()

  return (
    <>
      <h1 className="text-4xl font-bold mb-2">Courses</h1>
      <div className="flex flex-row gap-2">
        <Button onClick={() => setLocation("/courses/comp-basics")}>
          Introduction to Computing
        </Button>
        <Button onClick={() => setLocation("/courses/lua")}>
          Programming with Lua
        </Button>
        <Button onClick={() => setLocation("/courses/git")}>
          Introduction to Version Control with Git
        </Button>
      </div>
    </>
  )
}
