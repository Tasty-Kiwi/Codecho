import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { LuaEngine, LuaFactory } from "wasmoon"
import Editor from "@monaco-editor/react"
import { useRef } from "react"
import { Skeleton } from "@/components/ui/skeleton"

const factory = new LuaFactory()

async function evaluateLua(
  code: string,
  toastFunction: Function,
  printValidator: (str: string) => boolean,
  consoleRef: React.RefObject<HTMLPreElement | null>,
  luaValidator: (engine: LuaEngine) => boolean,
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
      } else {
        console.log(`🌙 -> ${JSON.stringify(str)}`)
        if (consoleRef.current)
          consoleRef.current.innerText += `→ ${JSON.stringify(str)}\n`
      }
      if (printValidator(str) === true)
        toastFunction({ title: "✅ Correct! Good job!" })
      else
        toastFunction({
          title: "❌ Please try again!",
        })
    })

    lua.global.set("input", () => {
      console.log(`🌙 <- ${inputString}`)
      if (consoleRef.current)
        consoleRef.current.innerText += `← ${inputString}\n`
      return inputString
    })
    await lua.doString("io.read = input")

    // Run a lua string
    await lua.doString(code)
    if (luaValidator) {
      if ((await luaValidator(lua)) === true)
        toastFunction({ title: "✅ Correct! Good job!" })
      else
        toastFunction({
          title: "❌ Please try again!",
        })
    }
  } catch (error: Error) {
    console.error(error)
    toastFunction({ title: "🛑 Error Found!", description: error.message })
  } finally {
    // Close the lua environment, so it can be freed
    lua.global.close()
  }
}

export default function LuaTest(props: {
  printValidator: (str: string) => boolean
  luaValidator: (engine: LuaEngine) => boolean
  inputString: string
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
            props.printValidator,
            consoleRef,
            props.luaValidator,
            props.inputString ?? "",
          )
        }}
        className="mb-2"
      >
        Run & Check!
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
