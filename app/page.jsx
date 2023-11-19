import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h2>Dashboard:</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eum? Ad ratione iure, aliquid corrupti ducimus excepturi? Vitae, veniam eius.</p>
    
      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View tickets</button>
        </Link>
      </div>

      <h2>Updates</h2>

      <div className="card">
        <h3>New Member</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, id?</p>
      </div>

      <div className="card">
        <h3>New Website</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, id?</p>
      </div>
    </main>
  )
}
