import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-black">KIPROD</h1>
          <p className="text-sm text-slate-500">
            Risk Management Services Ltd
          </p>
        </div>

        <nav className="flex gap-6 font-semibold">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/academy">Academy</Link>
          <Link to="/partnerships">Partnerships</Link>
          <Link to="/institute">Institute</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
