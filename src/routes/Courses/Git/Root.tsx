import { Link } from "wouter"

export default function GitCourses() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-2">Git Courses</h1>
      <ul className="list-disc mb-2">
        <li>
          <Link
            className="underline"
            href="/courses/git/what-is-version-control"
          >
            What is Version Control?
          </Link>
        </li>
        <li>
          <Link className="underline" href="/courses/git/benefits">
            Benefits
          </Link>
        </li>
        <li>
          <Link className="underline" href="/courses/git/basics">
            Basics
          </Link>
        </li>
        <li>
          <Link className="underline" href="/courses/git/what-is-github">
            What is GitHub?
          </Link>
        </li>
        <li>
          <Link
            className="underline"
            href="/courses/git/alternatives-to-github"
          >
            Alternatives to GitHub & How Do They Compare?
          </Link>
        </li>
      </ul>
    </div>
  )
}
