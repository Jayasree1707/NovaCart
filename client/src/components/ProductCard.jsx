import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

export default function ProductCard({
  image,
  name,
  price,
  category,
}) {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const product = {
    image,
    name,
    price,
    category,
  };

  return (
    <div className="relative bg-zinc-900 rounded-3xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg">

      {/* Wishlist Button */}
      <button
        onClick={() => addToWishlist(product)}
        className="absolute top-4 right-4 z-10 bg-black/70 p-2 rounded-full hover:scale-110 transition"
      >
        ❤️
      </button>

      {/* Product Image */}
      <Link to={`/product/${encodeURIComponent(name)}`}>
        <img
          src={image}
          alt={name}
          className="w-full h-72 object-cover cursor-pointer"
        />
      </Link>

      <div className="p-6">

        <p className="text-zinc-400 text-sm">
          {category}
        </p>

        {/* Product Name Clickable */}
        <Link to={`/product/${encodeURIComponent(name)}`}>
          <h3 className="text-2xl font-bold mt-2 hover:text-zinc-300 cursor-pointer">
            {name}
          </h3>
        </Link>

        <div className="flex items-center gap-1 text-yellow-400 mt-2">
          ⭐⭐⭐⭐⭐
        </div>

        <div className="flex justify-between items-center mt-6">

          <span className="font-bold text-xl">
            ₹{price}
          </span>

          <button
            onClick={() => addToCart(product)}
            className="bg-white text-black px-4 py-2 rounded-xl hover:bg-zinc-200 transition"
          >
            Add
          </button>

        </div>

      </div>

    </div>
  );
}