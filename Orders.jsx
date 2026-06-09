import Navbar from "../../components/Navbar";

export default function Orders() {

  const orders =
    JSON.parse(
      localStorage.getItem("orders")
    ) || [];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-white p-10">

        <h1 className="text-5xl font-bold mb-10">
          My Orders
        </h1>

        {orders.length === 0 ? (

          <h2>
            No Orders Yet
          </h2>

        ) : (

          orders.map((order) => (

            <div
              key={order.id}
              className="bg-zinc-900 p-6 rounded-3xl mb-6"
            >

              <h2 className="text-2xl font-bold">
                Order #{order.id}
              </h2>

              <p>
                {order.date}
              </p>

              <p className="mt-2 text-green-400">
                {order.status}
              </p>

              <p className="mt-3">
                Total: ₹
                {order.total.toLocaleString()}
              </p>

            </div>

          ))

        )}

      </div>
    </>
  );
}