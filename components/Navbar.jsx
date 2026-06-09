import { Link } from "react-router-dom";

export default function Navbar() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-zinc-800">

      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-4xl font-bold text-white tracking-wide">
            NovaCart
          </h1>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex gap-10 text-lg text-zinc-300">

          <Link to="/" className="hover:text-white transition duration-300">
            Home
          </Link>

          <Link to="/shop" className="hover:text-white transition duration-300">
            Shop
          </Link>

          <Link to="/categories" className="hover:text-white transition duration-300">
            Categories
          </Link>

          <Link to="/deals" className="hover:text-white transition duration-300">
            Deals
          </Link>

          <Link to="/contact" className="hover:text-white transition duration-300">
            Contact
          </Link>

          <Link to="/novaai" className="hover:text-white transition duration-300">
            NovaAI
          </Link>

        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          <Link to="/wishlist">
            <button className="bg-zinc-900 hover:bg-zinc-800 p-3 rounded-xl text-xl">
              ❤️
            </button>
          </Link>

          <Link to="/cart">
            <button className="bg-zinc-900 hover:bg-zinc-800 p-3 rounded-xl text-xl">
              🛒
            </button>
          </Link>

          {user ? (

            <Link to="/profile">
              <button className="bg-white text-black px-5 py-3 rounded-xl font-semibold hover:bg-zinc-200 transition">
                👤 {user.name}
              </button>
            </Link>

          ) : (

            <Link to="/login">
              <button className="bg-white text-black px-5 py-3 rounded-xl font-semibold hover:bg-zinc-200 transition">
                Login
              </button>
            </Link>

          )}

        </div>

      </div>

    </nav>
  );
}