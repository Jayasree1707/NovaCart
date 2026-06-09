import ProductCard from "./ProductCard";

import iphone from "../assets/products/iphone.jpg";
import macbook from "../assets/products/macbook.jpg";
import airpods from "../assets/products/airpods.jpg";
import watch from "../assets/products/watch.jpg";

export default function FeaturedProducts() {
  const products = [
    {
      image: iphone,
      name: "iPhone 16 Pro",
      price: "129,999",
      category: "Smartphone",
    },
    {
      image: macbook,
      name: "MacBook Pro",
      price: "199,999",
      category: "Laptop",
    },
    {
      image: airpods,
      name: "AirPods Pro",
      price: "24,999",
      category: "Accessories",
    },
    {
      image: watch,
      name: "Apple Watch",
      price: "49,999",
      category: "Wearables",
    },
  ];

  return (
    <section className="bg-black text-white py-20">

      <div className="max-w-7xl mx-auto px-8">

        <div className="flex justify-between items-center mb-12">

          <h2 className="text-5xl font-bold">
            Featured Products
          </h2>

          <button className="border border-zinc-700 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
            View All
          </button>

        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              name={product.name}
              price={product.price}
              category={product.category}
            />
          ))}

        </div>

      </div>

    </section>
  );
}