import { Link } from "react-router-dom";

export default function Categories() {
  const categories = [
    { name: "Electronics", icon: "📱" },
    { name: "Gaming", icon: "🎮" },
    { name: "Fashion", icon: "👟" },
    { name: "Books", icon: "📚" },
    { name: "Home", icon: "🏠" },
    { name: "Beauty", icon: "💄" },
  ];

  return (
    <section className="bg-black text-white py-20 px-10">
      <h1 className="text-6xl font-bold mb-16">
        Shop By Category
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/category/${category.name}`}
          >
            <div className="bg-zinc-900 rounded-3xl h-72 flex flex-col items-center justify-center hover:scale-105 transition">
              <div className="text-7xl mb-4">
                {category.icon}
              </div>

              <h2 className="text-4xl font-bold">
                {category.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}