import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import products from "../../data/products";
import Footer from "../../components/Footer";

export default function Deals() {

  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {

    const timer = setInterval(() => {

      setTimeLeft((prev) => {

        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {

          if (minutes > 0) {
            minutes--;
            seconds = 59;
          } else {

            if (hours > 0) {
              hours--;
              minutes = 59;
              seconds = 59;
            }

          }

        }

        return {
          hours,
          minutes,
          seconds,
        };

      });

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  const deals = products.slice(0, 8);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-white p-10">

        {/* Flash Sale Banner */}

        <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 rounded-3xl p-12 mb-16 shadow-xl">

          <h1 className="text-6xl font-bold">
            🔥 Flash Sale
          </h1>

          <p className="text-xl mt-4">
            Up To 70% OFF On Selected Products
          </p>

          <div className="flex gap-8 mt-8">

            <div className="bg-black/30 px-6 py-4 rounded-2xl">
              <p className="text-4xl font-bold">
                {String(timeLeft.hours).padStart(2, "0")}
              </p>
              <p>Hours</p>
            </div>

            <div className="bg-black/30 px-6 py-4 rounded-2xl">
              <p className="text-4xl font-bold">
                {String(timeLeft.minutes).padStart(2, "0")}
              </p>
              <p>Minutes</p>
            </div>

            <div className="bg-black/30 px-6 py-4 rounded-2xl">
              <p className="text-4xl font-bold">
                {String(timeLeft.seconds).padStart(2, "0")}
              </p>
              <p>Seconds</p>
            </div>

          </div>

        </div>

        {/* Products */}

        <h2 className="text-4xl font-bold mb-10">
          Today's Best Deals
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {deals.map((product) => (

            <div
              key={product.id}
              className="
                bg-zinc-900
                rounded-3xl
                p-8
                min-h-[520px]
                flex
                flex-col
                justify-between
                hover:scale-105
                transition
                duration-300
              "
            >

              <div>

                <div className="h-56 flex items-center justify-center mb-4">
  <img
    src={product.image}
    alt={product.name}
    className="max-h-full max-w-full object-contain"
  />
</div>

                <h3 className="text-2xl font-bold mt-6 h-20">
                  {product.name}
                </h3>

                <p className="text-zinc-400">
                  {product.category}
                </p>

                <div className="mt-6">

                  <span className="text-red-500 text-2xl line-through">
                    ₹{product.price.toLocaleString()}
                  </span>

                  <p className="text-4xl font-bold text-green-400 mt-2">
                    ₹{Math.floor(
                      product.price * 0.7
                    ).toLocaleString()}
                  </p>

                </div>

              </div>

              <Link
  to={`/product/${encodeURIComponent(product.name)}?deal=true`}
>

                <button
                  className="
                    mt-8
                    w-full
                    bg-white
                    text-black
                    py-4
                    rounded-2xl
                    font-semibold
                    hover:bg-zinc-200
                    transition
                  "
                >
                  Grab Deal
                </button>

              </Link>

            </div>

          ))}

        </div>

      </div>
      <Footer />
    </>
  );
}