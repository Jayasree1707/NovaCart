import Navbar from "../../components/Navbar";
import { useState } from "react";
import Footer from "../../components/Footer";

export default function Contact() {

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      message: "",
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert(
      "Message sent successfully!"
    );

    setFormData({
      name: "",
      email: "",
      message: "",
    });

  };

  const [review, setReview] =
  useState("");
  const submitReview = () => {

  if (!review) return;

  const existing =
    JSON.parse(
      localStorage.getItem(
        `reviews-${product.id}`
      )
    ) || [];

  existing.push({
    name: "Customer",
    review,
  });

  localStorage.setItem(
    `reviews-${product.id}`,
    JSON.stringify(existing)
  );

  setReview("");

  alert("Review Added");
};

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-white p-10">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-6xl font-bold mb-4">
            Contact Us
          </h1>

          <p className="text-zinc-400 mb-12">
            We'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Contact Info */}

            <div className="bg-zinc-900 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6">

                <div>
                  <h3 className="font-bold">
                    📧 Email
                  </h3>

                  <p className="text-zinc-400">
                    support@novacart.com
                  </p>
                </div>

                <div>
                  <h3 className="font-bold">
                    📞 Phone
                  </h3>

                  <p className="text-zinc-400">
                    +91 98765 43210
                  </p>
                </div>

                <div>
                  <h3 className="font-bold">
                    📍 Address
                  </h3>

                  <p className="text-zinc-400">
                    Chennai, Tamil Nadu,
                    India
                  </p>
                </div>

              </div>

            </div>

            {/* Form */}

            <form
              onSubmit={handleSubmit}
              className="bg-zinc-900 rounded-3xl p-8"
            >

              <h2 className="text-3xl font-bold mb-8">
                Send Message
              </h2>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-zinc-800 p-4 rounded-xl mb-5"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-zinc-800 p-4 rounded-xl mb-5"
                required
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-zinc-800 p-4 rounded-xl mb-5"
                required
              />

              <button
                type="submit"
                className="
                  w-full
                  bg-white
                  text-black
                  py-4
                  rounded-xl
                  font-semibold
                  hover:bg-zinc-200
                  transition
                "
              >
                Send Message
              </button>

              <div className="mt-10">

  <textarea
    value={review}
    onChange={(e) =>
      setReview(e.target.value)
    }
    placeholder="Write your review..."
    className="
      w-full
      bg-zinc-900
      p-4
      rounded-xl
    "
  />

  <button
    onClick={submitReview}
    className="
      mt-4
      bg-white
      text-black
      px-6
      py-3
      rounded-xl
    "
  >
    Submit Review
  </button>

</div>

            </form>

          </div>

        </div>

      </div>
      <Footer />
    </>
  );
}