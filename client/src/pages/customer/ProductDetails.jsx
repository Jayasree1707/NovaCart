import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useContext } from "react";

import products from "../../data/products";

import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import Footer from "../../components/Footer";

export default function ProductDetails() {

  const { id } = useParams();

  const location = useLocation();

  const isDeal =
    new URLSearchParams(location.search)
      .get("deal") === "true";

  const { addToCart } =
    useContext(CartContext);

  const { addToWishlist } =
    useContext(WishlistContext);

  const product = products.find(
    (p) =>
      p.name === decodeURIComponent(id)
  );
  <img
  src={product.image}
  alt={product.name}
  className="w-full h-full object-contain"
/>

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-4xl">
        Product Not Found
      </div>
    );
  }

  const dealPrice = Math.floor(
    product.price * 0.7
  );

  return (
    <div className="min-h-screen bg-black text-white pt-32 px-8">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Image */}

<div>

  <div className="bg-zinc-900 rounded-3xl h-[500px] flex items-center justify-center p-6">

    <img
      src={product.image}
      alt={product.name}
      className="max-h-full max-w-full object-contain rounded-2xl"
    />

  </div>

</div>

        {/* Details */}

        <div>

          <p className="text-zinc-400 text-lg">
            {product.category}
          </p>

          <h1 className="text-6xl font-bold mt-3">
            {product.name}
          </h1>

          <div className="mt-4 text-yellow-400 text-xl">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="text-zinc-400 mt-8 text-lg leading-relaxed">
            Premium product with modern design,
            excellent performance and high quality.
          </p>

          {/* Price */}

          {isDeal ? (

            <div className="mt-10">

              <p className="text-red-500 text-3xl line-through">
                ₹{product.price.toLocaleString()}
              </p>

              <h2 className="text-5xl font-bold text-green-400 mt-3">
                ₹{dealPrice.toLocaleString()}
              </h2>

              <p className="text-green-500 mt-2 text-lg">
                🔥 Deal Price (30% OFF)
              </p>

            </div>

          ) : (

            <h2 className="text-5xl font-bold mt-10">
              ₹{product.price.toLocaleString()}
            </h2>

          )}

        {/* Buttons */}

<div className="flex gap-5 mt-10">

  <button
    onClick={() => addToCart(product)}
    className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-zinc-200 transition"
  >
    Add To Cart
  </button>

  <button
    onClick={() => addToWishlist(product)}
    className="border border-white px-8 py-4 rounded-2xl hover:bg-zinc-900 transition"
  >
    Add To Wishlist
  </button>

</div>

{/* Reviews */}

<div className="mt-16">

  <h2 className="text-3xl font-bold mb-6">
    Customer Reviews
  </h2>

  <div className="space-y-4">

    <div className="bg-zinc-900 p-5 rounded-2xl">
      <h3 className="font-bold">
        Priya ⭐⭐⭐⭐⭐
      </h3>

      <p className="text-zinc-400 mt-2">
        Amazing product and excellent quality.
      </p>
    </div>

    <div className="bg-zinc-900 p-5 rounded-2xl">
      <h3 className="font-bold">
        Rahul ⭐⭐⭐⭐
      </h3>

      <p className="text-zinc-400 mt-2">
        Worth the money.
      </p>
    </div>

  </div>

</div>

        </div>

      </div>
      <Footer />

    </div>
  );
}