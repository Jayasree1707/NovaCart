import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <Footer />

      <div className="min-h-screen bg-black text-white p-10">

        <div className="max-w-6xl mx-auto">

          <h1 className="text-6xl font-bold mb-8">
            About NovaCart
          </h1>

          <p className="text-zinc-400 text-xl leading-relaxed">
            NovaCart is a modern e-commerce platform
            designed to deliver premium shopping
            experiences through beautiful design,
            intelligent recommendations and seamless
            purchasing.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-zinc-900 p-8 rounded-3xl">
              <h2 className="text-3xl font-bold">
                🚀 Mission
              </h2>

              <p className="mt-4 text-zinc-400">
                Make online shopping smarter,
                faster and more personalized.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-3xl">
              <h2 className="text-3xl font-bold">
                ⭐ Vision
              </h2>

              <p className="mt-4 text-zinc-400">
                Build India's most intelligent
                shopping ecosystem.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-3xl">
              <h2 className="text-3xl font-bold">
                💡 Innovation
              </h2>

              <p className="mt-4 text-zinc-400">
                AI-powered recommendations and
                immersive shopping experiences.
              </p>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}