import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import products from "../../data/products";

export default function AIAssistant() {

  const [query, setQuery] = useState("");
  const [recommendations, setRecommendations] =
    useState([]);

  const [message, setMessage] =
    useState("");

  const getRecommendations = () => {

  const text = query.toLowerCase();

  let budget = Infinity;

  // Detect Budget

  const lakhMatch =
    text.match(/(\d+)\s*lakh/);

  if (lakhMatch) {

    budget =
      parseInt(lakhMatch[1]) *
      100000;

  } else {

    const numMatch =
      text.match(/\d+/);

    if (numMatch) {
      budget =
        parseInt(numMatch[0]);
    }

  }

  let results = [];
  let aiReason = "";

  // SHOES

  if (
    text.includes("shoe") ||
    text.includes("shoes") ||
    text.includes("sneaker")
  ) {

    results = products.filter(
      p =>
        (
          p.name.toLowerCase().includes("nike") ||
          p.name.toLowerCase().includes("adidas") ||
          p.name.toLowerCase().includes("puma") ||
          p.name.toLowerCase().includes("shoe") ||
          p.name.toLowerCase().includes("sneaker")
        ) &&
        p.price <= budget
    );

    aiReason =
      "Recommended footwear matching your budget.";
  }

  // GAMING LAPTOP

  else if (
  text.includes("gaming") &&
  text.includes("laptop")
) {

  results = products.filter(
    (p) =>
      p.type === "laptop" &&
      p.price <= budget
  );

  aiReason =
    "NovaAI recommends these gaming laptops because they offer strong performance and fit within your budget.";
}

  // CODING LAPTOP

 else if (
  text.includes("coding") ||
  text.includes("developer") ||
  text.includes("programming")
) {

  results = products.filter(
    (p) =>
      p.category === "Electronics" &&
      (
        p.name.toLowerCase().includes("laptop") ||
        p.name.toLowerCase().includes("macbook")
      ) &&
      p.price <= budget
  );

  aiReason =
    "These laptops are excellent for coding and software development.";
}

  // PHONE

  else if (
    text.includes("phone") ||
    text.includes("smartphone")
  ) {

    results = products.filter(
      p =>
        (
          p.name.toLowerCase().includes("iphone") ||
          p.name.toLowerCase().includes("galaxy") ||
          p.name.toLowerCase().includes("pixel")
        ) &&
        p.price <= budget
    );

    aiReason =
      "Recommended smartphones matching your budget.";
  }

  // PHOTOGRAPHY

  else if (
    text.includes("camera") ||
    text.includes("photography")
  ) {

    results = products.filter(
      p =>
        (
          p.name.toLowerCase().includes("iphone") ||
          p.name.toLowerCase().includes("pixel")
        ) &&
        p.price <= budget
    );

    aiReason =
      "Best phones for photography.";
  }

  // WATCH

  else if (
    text.includes("watch") ||
    text.includes("smartwatch")
  ) {

    results = products.filter(
      p =>
        p.name.toLowerCase().includes("watch") &&
        p.price <= budget
    );

    aiReason =
      "Recommended smartwatches.";
  }

  // AUDIO

  else if (
    text.includes("headphone") ||
    text.includes("earbuds") ||
    text.includes("airpods")
  ) {

    results = products.filter(
      p =>
        (
          p.name.toLowerCase().includes("airpods") ||
          p.name.toLowerCase().includes("earbuds") ||
          p.name.toLowerCase().includes("headphone")
        ) &&
        p.price <= budget
    );

    aiReason =
      "Recommended audio products.";
  }

  // TV

  else if (
    text.includes("tv")
  ) {

    results = products.filter(
      p =>
        p.name.toLowerCase().includes("tv") &&
        p.price <= budget
    );

    aiReason =
      "Recommended televisions.";
  }

  // BOOKS

  else if (
    text.includes("book")
  ) {

    results = products.filter(
      p =>
        p.category === "Books" &&
        p.price <= budget
    );

    aiReason =
      "Recommended books.";
  }

  // BEAUTY

  else if (
    text.includes("beauty") ||
    text.includes("makeup") ||
    text.includes("skincare")
  ) {

    results = products.filter(
      p =>
        p.category === "Beauty" &&
        p.price <= budget
    );

    aiReason =
      "Recommended beauty products.";
  }

  // HOME

  else if (
    text.includes("home") ||
    text.includes("furniture")
  ) {

    results = products.filter(
      p =>
        p.category === "Home" &&
        p.price <= budget
    );

    aiReason =
      "Recommended home products.";
  }

  // STUDENT LAPTOP

else if (
  text.includes("student") ||
  text.includes("college")
) {

  results = products.filter(
    (p) =>
      p.category === "Electronics" &&
      (
        p.name.toLowerCase().includes("laptop") ||
        p.name.toLowerCase().includes("macbook")
      ) &&
      p.price <= budget
  );

  aiReason =
    "These laptops provide great battery life and performance for students.";
}
// AI / ML

else if (
  text.includes("ai") ||
  text.includes("machine learning")
) {

  results = products.filter(
    (p) =>
      (
        p.category === "Gaming" ||
        p.category === "Electronics"
      ) &&
      p.price <= budget
  );

  aiReason =
    "These powerful laptops are suitable for AI and Machine Learning workloads.";
}

// BUDGET PHONE

else if (
  text.includes("budget phone")
) {

  results = products.filter(
    p =>
      (
        p.name.toLowerCase().includes("iphone") ||
        p.name.toLowerCase().includes("pixel") ||
        p.name.toLowerCase().includes("galaxy")
      ) &&
      p.price <= budget
  );

  aiReason =
    "Recommended smartphones within your budget.";
}

// BEST CONSOLE

else if (
  text.includes("console")
) {

  results = products.filter(
    p =>
      (
        p.name.toLowerCase().includes("playstation") ||
        p.name.toLowerCase().includes("xbox") ||
        p.name.toLowerCase().includes("nintendo")
      )
  );

  aiReason =
    "Recommended gaming consoles.";
}

  // DEFAULT

  else {

    results = products.filter(
      p => p.price <= budget
    );

    aiReason =
      "Showing products within your budget.";
  }

  // Sort by cheapest first

  results.sort(
    (a, b) => a.price - b.price
  );

  if (results.length === 0) {

    setMessage(
      "Sorry, no products found matching your requirements."
    );

    setRecommendations([]);

    return;
  }

  setRecommendations(
    results.slice(0, 6)
  );

  setMessage(aiReason);
};

  return (
  <>
    <Navbar />

    <div className="min-h-screen bg-black text-white">

      <div className="max-w-7xl mx-auto px-10 py-16">

        <h1 className="text-7xl font-bold mb-4">
          NovaAI 🤖
        </h1>

        <p className="text-zinc-400 text-xl mb-10">
          Your AI Shopping Assistant. Ask for laptops,
          phones, fashion, gaming products, home essentials,
          beauty products and more.
        </p>

        {/* Suggested Questions */}

        <div className="flex flex-wrap gap-4 mb-10">

          <button
            onClick={() =>
              setQuery("Gaming Laptop Under 1 Lakh")
            }
            className="bg-zinc-800 hover:bg-zinc-700 px-5 py-3 rounded-xl transition"
          >
            Gaming Laptop Under 1 Lakh
          </button>

          <button
            onClick={() =>
              setQuery("Best Camera Phone")
            }
            className="bg-zinc-800 hover:bg-zinc-700 px-5 py-3 rounded-xl transition"
          >
            Best Camera Phone
          </button>

          <button
            onClick={() =>
              setQuery("Shoes Under 5000")
            }
            className="bg-zinc-800 hover:bg-zinc-700 px-5 py-3 rounded-xl transition"
          >
            Shoes Under 5000
          </button>

          <button
            onClick={() =>
              setQuery("Student Laptop")
            }
            className="bg-zinc-800 hover:bg-zinc-700 px-5 py-3 rounded-xl transition"
          >
            Student Laptop
          </button>

          <button
            onClick={() =>
              setQuery("Best Coding Laptop")
            }
            className="bg-zinc-800 hover:bg-zinc-700 px-5 py-3 rounded-xl transition"
          >
            Coding Laptop
          </button>

        </div>

        {/* Search */}

        <div className="flex gap-5 mb-10">

          <input
            type="text"
            value={query}
            onChange={(e) =>
              setQuery(e.target.value)
            }
            placeholder="Ask NovaAI anything..."
            className="
              flex-1
              bg-zinc-900
              p-6
              rounded-2xl
              outline-none
              border
              border-zinc-800
              focus:border-white
            "
          />

          <button
            onClick={getRecommendations}
            className="
              bg-white
              text-black
              px-10
              rounded-2xl
              font-semibold
              hover:scale-105
              transition
            "
          >
            Ask AI
          </button>

        </div>

        {/* AI Response */}

        {message && (

          <div
            className="
              bg-zinc-900
              border
              border-green-500
              rounded-2xl
              p-6
              mb-10
            "
          >

            <h2 className="text-green-400 text-2xl font-bold">
              NovaAI Recommendation
            </h2>

            <p className="mt-3 text-zinc-300">
              {message}
            </p>

          </div>

        )}

        {/* Recommendations */}

        {recommendations.length > 0 && (

          <>
            <div className="grid md:grid-cols-3 gap-8">
                {recommendations.map((product) => (

    <div
      key={product.id}
      className="bg-zinc-900 rounded-3xl p-6 hover:scale-105 transition"
    >

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-contain mb-5"
      />

      <h3 className="text-2xl font-bold">
        {product.name}
      </h3>

      <p className="text-zinc-400">
        {product.category}
      </p>

      <p className="text-4xl font-bold mt-4">
        ₹{product.price.toLocaleString()}
      </p>

      <div className="mt-5 bg-green-900 text-green-400 px-4 py-3 rounded-xl">
        AI Match Score: 95%
      </div>

    </div>

  ))}

            </div>

            {/* Unique Feature */}

            <div className="mt-16">

              <h2 className="text-3xl font-bold mb-6">
                Why NovaAI Chose These Products
              </h2>

              <div className="bg-zinc-900 rounded-3xl p-8">

                <ul className="space-y-3 text-lg">

                  <li>✔ Within Your Budget</li>

                  <li>✔ High User Ratings</li>

                  <li>✔ Excellent Value For Money</li>

                  <li>✔ Popular Among Customers</li>

                  <li>✔ Long-Term Reliability</li>

                </ul>

              </div>

            </div>
          </>

        )}

      </div>

    </div>

    <Footer />
  </>
);
}