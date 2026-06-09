import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Compare() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-white p-10">

        <h1 className="text-6xl font-bold mb-10">
          Compare Products
        </h1>

        <div className="bg-zinc-900 rounded-3xl p-10 text-center">

          <h2 className="text-3xl font-bold">
            Product Comparison
          </h2>

          <p className="text-zinc-400 mt-5">
            Select products to compare.
          </p>

        </div>

      </div>

      <Footer />
    </>
  );
}