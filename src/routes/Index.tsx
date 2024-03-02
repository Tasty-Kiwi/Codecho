import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { LuaFactory } from "wasmoon"

const factory = new LuaFactory()

async function evaluateLua(code: string): void {
  const lua = await factory.createEngine()

  try {
    // Set a JS function to be a global lua function
    await lua.doString("print = nil")

    lua.global.set('print', (str: string) => console.log(`🌙 -> ${str}`))
    // Run a lua string
    await lua.doString(code)
  } finally {
    // Close the lua environment, so it can be freed
    lua.global.close()
  }
}

export default function Index() {
  const [count, setCount] = useState(0)
  const { toast } = useToast()
  return (
    <>
      <h1 className="text-4xl font-bold pb-2">Mooncourse</h1>
      <div className='pb-2'>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
      <div>
        <Button onClick={async () => {
          toast({ title: "Lua executed", })
          await evaluateLua('print("lua works")')
        }}>Execute Lua</Button>
      </div>
    </>
  )
}