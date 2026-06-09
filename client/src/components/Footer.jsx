import { Link } from "react-router-dom";

export default function Footer() {

  return (

    <footer className="bg-zinc-950 border-t border-zinc-800 text-white mt-20">

      <div className="max-w-7xl mx-auto p-10 grid md:grid-cols-4 gap-10">

        <div>

          <h2 className="text-3xl font-bold">
            NovaCart
          </h2>

          <p className="text-zinc-400 mt-4">
            Premium Shopping Experience.
          </p>

        </div>

        <div>

          <h3 className="font-bold mb-4">
            Company
          </h3>

          <div className="space-y-2">

            <Link
              to="/about"
              className="block text-zinc-400"
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className="block text-zinc-400"
            >
              Contact
            </Link>

          </div>

        </div>

        <div>

          <h3 className="font-bold mb-4">
            Support
          </h3>

          <p className="text-zinc-400">
            FAQ
          </p>

          <p className="text-zinc-400">
            Shipping
          </p>

        </div>

        <div>

          <h3 className="font-bold mb-4">
            Follow Us
          </h3>

          <p className="text-zinc-400">
            Instagram
          </p>

          <p className="text-zinc-400">
            LinkedIn
          </p>

        </div>

      </div>

      <div className="text-center border-t border-zinc-800 py-6 text-zinc-500">

        © 2026 NovaCart. All Rights Reserved.

      </div>

    </footer>
  );
}