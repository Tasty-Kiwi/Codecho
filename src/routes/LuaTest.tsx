import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { LuaFactory } from "wasmoon"
import Editor from "@monaco-editor/react"
import { useRef } from "react"
import { Skeleton } from "@/components/ui/skeleton"

const factory = new LuaFactory()

async function evaluateLua(code: string, toastFunction: Function) {
  const lua = await factory.createEngine()

  try {
    // Set a JS function to be a global lua function
    await lua.doString("print = nil; io.read = nil")

    lua.global.set("print", (str: string) => {
      if (str !== "Hello, world!")
        toastFunction({
          title: "Tests have failed",
          description: `String '${str}' failed to meet the criteria 'Hello, world!'.`,
        })
      else toastFunction({ title: "Tests have succeded!" })
      console.log(`🌙 -> ${str}`)
    })

    lua.global.set("input", () => "Example")
    await lua.doString("io.read = input")

    // Run a lua string
    await lua.doString(code)
  } finally {
    // Close the lua environment, so it can be freed
    lua.global.close()
  }
}

export default function LuaTest() {
  const [count, setCount] = useState(0)
  const editorRef = useRef(null)

  const { toast } = useToast()
  return (
    <>
      <h1 className="text-4xl font-bold pb-2">Mooncourse</h1>
      <div className="pb-2">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
      <p>Task: print "Hello, world!" to the console.</p>
      <div className="pb-4">
        <Button
          onClick={async () => {
            //toast({ title: "Lua executed", })
            await evaluateLua(editorRef.current.getValue(), toast)
          }}
        >
          Execute Lua
        </Button>
      </div>
      <div>
        <Editor
          height="10rem"
          defaultLanguage="lua"
          defaultValue='print("Hello, world!")'
          theme="vs-dark"
          onMount={(editor) => {
            editorRef.current = editor
          }}
          loading={<Skeleton className="h-[10rem] w-11/12 rounded-lg" />}
        />
      </div>
    </>
  )
}
