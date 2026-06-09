import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const categories = [
  {
    name: "Electronics",
    icon: "📱",
  },
  {
    name: "Gaming",
    icon: "🎮",
  },
  {
    name: "Fashion",
    icon: "👟",
  },
  {
    name: "Books",
    icon: "📚",
  },
  {
    name: "Home",
    icon: "🏠",
  },
  {
    name: "Beauty",
    icon: "💄",
  },
];

export default function Category() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white p-10">

        <h1 className="text-5xl font-bold mb-12">
          Shop By Category
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {categories.map((category) => (

            <Link
              key={category.name}
              to={`/category/${category.name}`}
            >

              <div className="bg-zinc-900 rounded-3xl p-10 hover:scale-105 transition cursor-pointer">

                <div className="text-7xl text-center">
                  {category.icon}
                </div>

                <h2 className="text-3xl font-bold text-center mt-6">
                  {category.name}
                </h2>

              </div>

            </Link>

          ))}

        </div>

      </div>
      <Footer />
    </>
  );
}