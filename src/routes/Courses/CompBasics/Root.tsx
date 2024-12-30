import { Link } from "wouter"

export default function CompBasicsCourses() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-2">Git Courses</h1>
      <ul className="list-disc mb-2">
        <li><Link className="underline" href="/courses/comp-basics/intro">Introduction</Link></li>
        <li><Link className="underline" href="/courses/comp-basics/memory">Memory</Link></li>
        <li><Link className="underline" href="/courses/comp-basics/algorithms">Algorithms</Link></li>
        <li><Link className="underline" href="/courses/comp-basics/how-code-works">How Code Works</Link></li>
        <li><Link className="underline" href="/courses/comp-basics/compiling-vs-interpreting">Compiling vs Interpreting & Other Differences</Link></li>
      </ul>
    </div>
  )
}
