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
  luaValidator: (engine: LuaEngine) => boolean,
) {
  const lua = await factory.createEngine()

  try {
    // Set a JS function to be a global lua function
    await lua.doString("print = nil; io.read = nil")

    lua.global.set("print", (str: string) => {
      console.log(`🌙 -> ${str}`)
      if (!printValidator) return
      if (printValidator(str) === true)
        toastFunction({ title: "✅ Tests Have Succeded!" })
      else
        toastFunction({
          title: "❌ Tests Have Failed!",
        })
    })

    lua.global.set("input", () => "Example")
    await lua.doString("io.read = input")

    // Run a lua string
    await lua.doString(code)
    if (luaValidator) {
      if ((await luaValidator(lua)) === true)
        toastFunction({ title: "✅ Tests Have Succeded!" })
      else
        toastFunction({
          title: "❌ Tests Have Failed!",
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
}) {
  const editorRef = useRef(null)

  const { toast } = useToast()
  return (
    <div className="not-prose">
      <Button
        onClick={async () => {
          await evaluateLua(
            editorRef.current.getValue(),
            toast,
            props.printValidator,
            props.luaValidator,
          )
        }}
        className="mb-2"
      >
        Run!
      </Button>
      <div>
        <Editor
          defaultLanguage="lua"
          defaultValue='print("Hello, world!")'
          beforeMount={(monaco) => {
            monaco.editor.defineTheme("codecho", {
              base: "vs-dark",
              inherit: true,
              rules: [],
              colors: {
                "editor.background": "#0b1326",
                // "editor.background": "#01040b",
              },
            })
          }}
          theme="codecho"
          onMount={(editor) => {
            editorRef.current = editor
            editor.updateOptions({
              minimap: { enabled: false },
            })
          }}
          height={"15rem"}
          loading={<Skeleton className="h-[10rem] w-150wv rounded-lg" />}
        />
        <div>
          <h3>Console</h3>
          <pre>Hello, world!</pre>
        </div>
      </div>
    </div>
  )
}
