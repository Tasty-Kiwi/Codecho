import { Button } from "@/components/ui/button"
import { useLocation } from "wouter"

export default function Index() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setLocation] = useLocation()

  return (
    <>
      <h1 className="text-4xl font-bold mb-2">Codecho</h1>
      <div className="m-2" onClick={() => setLocation("/courses")}>
        <Button>Courses</Button>
      </div>
      <div className="m-2" onClick={() => setLocation("/courses/lua/beginner/printing")}>
        <Button>Lua Test</Button>
      </div>
    </>
  )
}
