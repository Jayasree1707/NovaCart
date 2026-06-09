import { Link } from "react-router-dom";
import heroBanner from "../assets/hero-banner.png";

export default function Hero() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}

        <div>

          <span className="bg-zinc-900 px-4 py-2 rounded-full text-sm">
            ✨ Powered by NovaAI
          </span>

          <h1 className="text-7xl font-bold mt-6 leading-tight">
            Premium
            <br />
            Shopping
            <br />
            Experience
          </h1>

          <p className="text-zinc-400 text-xl mt-8">
            Discover Electronics, Fashion,
            Gaming, Books, Beauty and Home
            Essentials all in one place.
          </p>

          <div className="flex gap-4 mt-10">

            <Link to="/shop">
              <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold">
                Shop Now
              </button>
            </Link>

            <Link to="/deals">
              <button className="border border-white px-8 py-4 rounded-2xl">
                Explore Deals
              </button>
            </Link>

          </div>

        </div>

        {/* Right */}

        <div>

          <div>
  <img
  src={heroBanner}
  alt="NovaCart Banner"
  className="rounded-3xl shadow-2xl w-[400px] h-auto mx-auto"
/>
</div>

        </div>

      </div>

    </section>
  );
}