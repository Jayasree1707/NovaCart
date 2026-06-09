import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Products() {
  return (
    <>
      <Navbar />
      <Footer />
      <div className="p-10">
        <h1 className="text-4xl font-bold">
          Product Management
        </h1>
      </div>
    </>
  );
}