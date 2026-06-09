import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

export default function Cart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) =>
      sum +
      item.price *
        item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-black text-white px-10 py-12">

      <h1 className="text-5xl font-bold mb-10">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div className="text-center mt-20">
          <h2 className="text-3xl">
            Cart is Empty
          </h2>

          <p className="text-zinc-400 mt-4">
            Add some products
            to continue shopping
          </p>
        </div>
      ) : (
        <>
        <Footer />
          <div className="space-y-6">

            {cart.map((item) => (
              <div
                key={item.name}
                className="bg-zinc-900 rounded-3xl p-6 flex items-center justify-between"
              >

                <div className="flex gap-6 items-center">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-2xl"
                  />

                  <div>

                    <h2 className="text-2xl font-bold">
                      {item.name}
                    </h2>

                    <p className="text-zinc-400">
                      {item.category}
                    </p>

                    <p className="mt-3 text-xl">
                      ₹{item.price}
                    </p>

                  </div>
                </div>

                <div className="flex items-center gap-4">

                  <button
                    onClick={() =>
                      decreaseQty(
                        item.name
                      )
                    }
                    className="bg-zinc-800 px-4 py-2 rounded-xl"
                  >
                    -
                  </button>

                  <span className="text-xl">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQty(
                        item.name
                      )
                    }
                    className="bg-zinc-800 px-4 py-2 rounded-xl"
                  >
                    +
                  </button>

                  <button
                    onClick={() =>
                      removeFromCart(
                        item.name
                      )
                    }
                    className="ml-6 bg-red-500 px-4 py-2 rounded-xl"
                  >
                    Remove
                  </button>

                </div>

              </div>
            ))}
          </div>

          <div className="mt-12 bg-zinc-900 p-8 rounded-3xl">

            <h2 className="text-4xl font-bold">
              Total: ₹{total}
            </h2>

            <Link to="/checkout">

  <button
    className="w-full bg-white text-black py-4 rounded-xl mt-5"
  >
    Proceed To Checkout
  </button>

</Link>

          </div>
        </>
      )}
    </div>
  );
}