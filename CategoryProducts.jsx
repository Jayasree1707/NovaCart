import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import products from "../../data/products";
import Footer from "../../components/Footer";

export default function CategoryProducts() {

  const { category } = useParams();

  const filteredProducts =
    products.filter(
      (product) =>
        product.category.toLowerCase() ===
        category.toLowerCase()
    );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-white p-10">

        <h1 className="text-5xl font-bold mb-12">

          {category} Products

        </h1>

        <div className="grid md:grid-cols-4 gap-8">

          {filteredProducts.map((product) => (

            <div
              key={product.id}
              className="bg-zinc-900 rounded-3xl p-6"
            >

              <img
  src={product.image}
  alt={product.name}
  className="w-full h-48 object-contain"
/>

              <h2 className="text-2xl font-bold mt-4">
                {product.name}
              </h2>

              <p className="text-zinc-400">
                {product.category}
              </p>

              <p className="text-2xl font-bold mt-4">
                ₹{product.price.toLocaleString()}
              </p>

              <Link
                to={`/product/${encodeURIComponent(product.name)}`}
              >
                <button className="mt-6 w-full bg-white text-black py-3 rounded-xl">
                  View Details
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