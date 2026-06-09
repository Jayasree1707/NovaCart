import Navbar from "../../components/Navbar";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import Footer from "../../components/Footer";

export default function Profile() {

  const { cart } =
    useContext(CartContext);

  const { wishlist } =
    useContext(WishlistContext);

  const orders =
    JSON.parse(
      localStorage.getItem("orders")
    ) || [];

  const user =
    JSON.parse(
      localStorage.getItem("user")
    ) || {
      name: "Guest User",
      email: "guest@novacart.com"
    };

  const handleLogout = () => {

    localStorage.removeItem("user");
    localStorage.removeItem("token");

    window.location.href = "/";
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-white p-10">

        <h1 className="text-5xl font-bold mb-10">
          My Profile
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Profile Card */}

          <div className="bg-zinc-900 rounded-3xl p-8">

            <div className="text-8xl text-center">
              👤
            </div>

            <h2 className="text-3xl font-bold mt-6 text-center">
              {user.name}
            </h2>

            <p className="text-zinc-400 text-center mt-2">
              {user.email}
            </p>

            <button
              onClick={handleLogout}
              className="mt-8 w-full bg-red-500 py-3 rounded-xl"
            >
              Logout
            </button>

          </div>

          {/* Stats */}

          <div className="md:col-span-2">

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-zinc-900 p-8 rounded-3xl">

                <h3 className="text-zinc-400">
                  Orders
                </h3>

                <p className="text-5xl font-bold mt-4">
                  {orders.length}
                </p>

              </div>

              <div className="bg-zinc-900 p-8 rounded-3xl">

                <h3 className="text-zinc-400">
                  Cart Items
                </h3>

                <p className="text-5xl font-bold mt-4">
                  {cart.length}
                </p>

              </div>

              <div className="bg-zinc-900 p-8 rounded-3xl">

                <h3 className="text-zinc-400">
                  Wishlist
                </h3>

                <p className="text-5xl font-bold mt-4">
                  {wishlist.length}
                </p>

              </div>

            </div>

            {/* Recent Orders */}

            <div className="bg-zinc-900 rounded-3xl p-8 mt-8">

              <h2 className="text-3xl font-bold mb-6">
                Recent Orders
              </h2>

              {orders.length === 0 ? (

                <p>No Orders Yet</p>

              ) : (

                orders.slice(-5).reverse().map((order) => (

                  <div
                    key={order.id}
                    className="border-b border-zinc-700 py-4"
                  >

                    <h3 className="font-bold">
                      Order #{order.id}
                    </h3>

                    <p className="text-zinc-400">
                      {order.date}
                    </p>

                    <p className="text-green-400">
                      {order.status}
                    </p>

                  </div>

                ))

              )}

            </div>

          </div>

        </div>

      </div>
      <Footer />
    </>
  );
}