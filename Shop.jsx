import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import products from "../../data/products";

export default function Shop() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("");

  // Auto-generate categories from products.js
  const categories = [
    "All",
    ...new Set(
      products.map(
        (product) => product.category
      )
    ),
  ];

  const filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "All"
        ? true
        : product.category === category;

    return matchesSearch && matchesCategory;
  });
 const sortedProducts = [...filteredProducts];

if (sortBy === "low") {
  sortedProducts.sort(
    (a, b) => a.price - b.price
  );
}

if (sortBy === "high") {
  sortedProducts.sort(
    (a, b) => b.price - a.price
  );
}
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-white p-10">

        <h1 className="text-5xl font-bold mb-10">
          Shop Products
        </h1>

        {/* Search */}

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full p-4 rounded-xl bg-zinc-900 mb-6"
        />

        {/* Categories */}

        <div className="flex flex-col md:flex-row gap-4 mb-10">

  <select
    value={category}
    onChange={(e) =>
      setCategory(e.target.value)
    }
    className="p-4 rounded-xl bg-zinc-900"
  >
    {categories.map((cat) => (
      <option
        key={cat}
        value={cat}
      >
        {cat}
      </option>
    ))}
  </select>

  <select
    value={sortBy}
    onChange={(e) =>
      setSortBy(e.target.value)
    }
    className="p-4 rounded-xl bg-zinc-900"
  >
    <option value="">
      Sort Products
    </option>

    <option value="low">
      Price Low → High
    </option>

    <option value="high">
      Price High → Low
    </option>

  </select>

</div>

        {/* Products */}

        <div className="grid md:grid-cols-4 gap-8">

          {sortedProducts.map((product) => (

            <div
              key={product.id}
              className="
                bg-zinc-900
                rounded-3xl
                p-6
                hover:scale-105
                transition
                flex
                flex-col
              "
            >

              <div className="text-7xl text-center">
                <img
  src={product.image}
  alt={product.name}
  className="w-full h-48 object-contain rounded-xl"
/>
              </div>

              <h2 className="text-2xl font-bold mt-4 min-h-[80px]">
                {product.name}
              </h2>

              <p className="text-zinc-400">
                {product.category}
              </p>

              <p className="text-yellow-400 mt-2">
  ⭐ {product.rating || 4.5}
</p>

              <p className="text-2xl font-bold mt-4">
                ₹{product.price.toLocaleString()}
              </p>

            <div className="mt-auto">

  <Link
    to={`/product/${encodeURIComponent(product.name)}`}
  >
    <button className="mt-6 w-full bg-white text-black py-3 rounded-xl hover:bg-zinc-200 transition">
      View Details
    </button>
  </Link>

  <Link
    to="/compare"
    state={{ product }}
  >
    <button
      className="
        mt-3
        w-full
        border
        border-white
        py-3
        rounded-xl
        hover:bg-white
        hover:text-black
        transition
      "
    >
      Compare
    </button>
  </Link>

</div>

            </div>

          ))}

        </div>

      </div>

      {/* Footer should be LAST */}
      <Footer />

    </>
  );
}