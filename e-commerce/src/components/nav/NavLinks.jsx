import { Link } from 'react-router-dom'

function NavLinks() {
  return (
    <div className="flex  my-12 gap-4">
    <Link className="text-gray-400 hover:underline" to="/">
      Home
    </Link>
    <span>/</span>
    <Link className="hover:underline">Cart</Link>
  </div>
  )
}

export default NavLinks