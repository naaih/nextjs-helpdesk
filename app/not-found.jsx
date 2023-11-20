import Link from "next/link"

export default function notFound() {
  return (
    <main className="text-center">
        <h2 className="text-3xl">There was a problem 😞</h2>
        <p>Cannot find the page you were looking for</p>
        <p>Go back to <Link href="/">Previous Page</Link></p>
    </main>
  )
}
