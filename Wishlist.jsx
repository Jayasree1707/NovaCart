import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import Footer from "../../components/Footer";

export default function Wishlist() {
  const { wishlist } =
    useContext(WishlistContext);

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Wishlist
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        {wishlist.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-2xl overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-60 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-bold">
                {item.name}
              </h2>

              <p className="text-zinc-400">
                ₹{item.price}
              </p>
              <Footer />
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}