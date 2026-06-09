import { useContext, useState } from "react";
import Navbar from "../../components/Navbar";
import { CartContext } from "../../context/CartContext";
import Footer from "../../components/Footer";

export default function Checkout() {

  const { cart } =
    useContext(CartContext);

  const [address, setAddress] =
    useState("");

  const total =
    cart.reduce(
      (sum, item) =>
        sum + item.price * item.quantity,
      0
    );

  const placeOrder = () => {

    const order = {
      id: Date.now(),
      items: cart,
      total,
      address,
      date:
        new Date().toLocaleString(),
      status: "Processing",
    };

    const existing =
      JSON.parse(
        localStorage.getItem("orders")
      ) || [];

    localStorage.setItem(
      "orders",
      JSON.stringify([
        ...existing,
        order,
      ])
    );

    alert(
      "Order Placed Successfully!"
    );

    window.location.href =
      "/orders";
  };

  return (
    <>
      <Navbar />
      <Footer />

      <div className="min-h-screen bg-black text-white p-10">

        <h1 className="text-5xl font-bold mb-10">
          Checkout
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Address */}

          <div className="bg-zinc-900 p-8 rounded-3xl">

            <h2 className="text-2xl font-bold mb-6">
              Delivery Address
            </h2>

            <textarea
              rows="6"
              value={address}
              onChange={(e) =>
                setAddress(
                  e.target.value
                )
              }
              placeholder="Enter full address..."
              className="w-full bg-zinc-800 p-4 rounded-xl"
            />

          </div>

          {/* Summary */}

          <div className="bg-zinc-900 p-8 rounded-3xl">

            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            {cart.map((item) => (

              <div
                key={item.name}
                className="flex justify-between mb-4"
              >

                <span>
                  {item.name}
                </span>

                <span>
                  ₹
                  {(
                    item.price *
                    item.quantity
                  ).toLocaleString()}
                </span>

              </div>

            ))}

            <hr className="my-6 border-zinc-700" />

            <h3 className="text-3xl font-bold">
              Total: ₹
              {total.toLocaleString()}
            </h3>

            <button
              onClick={placeOrder}
              className="mt-8 w-full bg-white text-black py-4 rounded-xl"
            >
              Place Order
            </button>

          </div>

        </div>

      </div>
    </>
  );
}