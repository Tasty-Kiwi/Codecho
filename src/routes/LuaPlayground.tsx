import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { LuaFactory } from "wasmoon"
import Editor from "@monaco-editor/react"
import { useRef, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { Textarea } from "@/components/ui/textarea"

const factory = new LuaFactory()

async function evaluateLua(
  code: string,
  toastFunction: Function,
  consoleRef: React.RefObject<HTMLPreElement | null>,
  inputString: string,
) {
  const lua = await factory.createEngine()

  try {
    // Set a JS function to be a global lua function
    await lua.doString("print = nil; input = nil; io.read = nil")

    lua.global.set("print", (str: any) => {
      if (typeof str === "string" || typeof str === "number") {
        console.log(`🌙 -> ${str}`)
        if (consoleRef.current) consoleRef.current.innerText += `→ ${str}\n`
        return
      }
      console.log(`🌙 -> ${JSON.stringify(str)}`)
      if (consoleRef.current)
        consoleRef.current.innerText += `→ ${JSON.stringify(str)}\n`
    })

    lua.global.set("input", () => {
      console.log(`🌙 <- ${inputString}`)
      if (consoleRef.current) consoleRef.current.innerText += `← ${inputString}\n`
      return inputString
    })
    await lua.doString("io.read = input")

    // Run a lua string
    await lua.doString(code)
  } catch (error: any) {
    console.error(error)
    toastFunction({ title: "🛑 Error Found!", description: error.message })
    if (consoleRef.current)
      consoleRef.current.innerText += `=========\n🛑 Error Found!\n${error.message}\n=========\n`
  } finally {
    // Close the lua environment, so it can be freed
    lua.global.close()
  }
}

export function LuaRunner(props: {
  inputString?: string
  defaultValue: string
}) {
  const editorRef = useRef(null)
  const consoleRef = useRef<HTMLPreElement>(null)

  const { toast } = useToast()
  return (
    <div className="not-prose">
      <Button
        onClick={async () => {
          consoleRef.current.innerText = ""
          await evaluateLua(
            editorRef.current.getValue(),
            toast,
            consoleRef,
            props.inputString ?? "",
          )
        }}
        className="mb-2"
      >
        Run!
      </Button>
      <div>
        <Editor
          defaultLanguage="lua"
          defaultValue={props.defaultValue}
          beforeMount={(monaco) => {
            monaco.editor.defineTheme("codecho-dark", {
              base: "vs-dark",
              inherit: true,
              rules: [],
              colors: {
                "editor.background": "#0b1326",
                // "editor.background": "#01040b",
              },
            })
          }}
          theme="codecho-dark"
          onMount={(editor) => {
            editorRef.current = editor
            editor.updateOptions({
              minimap: { enabled: false },
            })
          }}
          height={"15rem"}
          width={"60rem"}
          loading={<Skeleton className="h-[10rem] w-[60rem] rounded-lg" />}
        />
        <div>
          <h3 className="text-2xl">Console</h3>
          <pre ref={consoleRef}></pre>
        </div>
      </div>
    </div>
  )
}

export default function LuaPlayground() {
  const [input, setInput] = useState("")
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-3">Lua Playground</h1>
      <Textarea
        onChange={(event) => setInput(event.target.value)}
        placeholder="Custom input"
        className="mb-3"
      />
      <LuaRunner inputString={input} defaultValue={`print("Hello, World!")`} />
    </div>
  )
}
