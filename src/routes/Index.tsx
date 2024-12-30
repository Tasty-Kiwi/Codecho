import { Button } from "@/components/ui/button"
import { useLocation } from "wouter"

export default function Index() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setLocation] = useLocation()
  return (
    <div className="flex flex-row gap-2">
      <Button onClick={() => setLocation("/courses")}>Courses</Button>
      <Button onClick={() => setLocation("/lua-playground")}>
        Lua Playground
      </Button>
    </div>
  )
}
