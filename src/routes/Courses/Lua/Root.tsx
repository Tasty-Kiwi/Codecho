import { Link } from "wouter"

export default function LuaCourses() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-2">Lua Courses</h1>
      <h2 className="text-2xl font-bold mb-2">Beginner</h2>
      <ul className="list-disc mb-2">
        <li>
          <Link
            className="underline"
            href="/courses/lua/beginner/about-and-history"
          >
            About & History of Lua
          </Link>
        </li>
        <li>
          <Link className="underline" href="/courses/lua/beginner/printing">
            Printing things to the console
          </Link>
        </li>
        <li>
          <Link className="underline" href="/courses/lua/beginner/comments">
            Comments
          </Link>
        </li>
        <li>
          <Link
            className="underline"
            href="/courses/lua/beginner/variables-and-types"
          >
            Variables & Types
          </Link>
        </li>
        <li>
          <Link className="underline" href="/courses/lua/beginner/input">
            Input
          </Link>
        </li>
        <li>
          <Link className="underline" href="/courses/lua/beginner/arithmetic">
            Arithmetic
          </Link>
        </li>
        <li>
          <Link className="underline" href="/courses/lua/beginner/control-flow">
            Control Flow
          </Link>
        </li>
        <li>
          <Link className="underline" href="/courses/lua/beginner/table">
            Tables
          </Link>
        </li>
        <li>
          <Link className="underline" href="/courses/lua/beginner/functions">
            Functions
          </Link>
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Intermediate</h2>
      <ul className="list-disc mb-2">
        <li>
          <Link
            className="underline"
            href="/courses/lua/intermediate/constants"
          >
            Constants
          </Link>
        </li>
        <li>
          <Link
            className="underline"
            href="/courses/lua/intermediate/math-library"
          >
            Math library
          </Link>
        </li>
        <li>
          <Link
            className="underline"
            href="/courses/lua/intermediate/string-manipulation"
          >
            String manipulation
          </Link>
        </li>
        <li>
          <Link
            className="underline"
            href="/courses/lua/intermediate/table-manipulation"
          >
            Table manipulation
          </Link>
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Advanced</h2>
      <ul className="list-disc">
        <li>
          <Link
            className="underline"
            href="/courses/lua/advanced/intro-to-metatables"
          >
            Introduction to Metatables
          </Link>
        </li>
        <li>
          <Link
            className="underline"
            href="/courses/lua/advanced/object-oriented-programming"
          >
            Object Oriented Programming
          </Link>
        </li>
        <li>
          <Link
            className="underline"
            href="/courses/lua/advanced/coroutines-and-asynchronous-programming"
          >
            Coroutines and Asynchronous Programming
          </Link>
        </li>
      </ul>
    </div>
  )
}
