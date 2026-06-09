import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "role",
        res.data.role
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );
      console.log(res.data.user);

      navigate("/");
    } catch (error) {
      console.log(error);

      if (error.response) {
        alert(
          error.response.data.message ||
            "Login Failed"
        );
      } else {
        alert(
          "Cannot connect to server"
        );
      }
    }
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center px-4">

      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-10 rounded-3xl w-full max-w-md shadow-2xl"
      >
        <h1 className="text-white text-5xl font-bold mb-8">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full p-4 mb-4 rounded-xl bg-zinc-800 text-white outline-none"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full p-4 mb-6 rounded-xl bg-zinc-800 text-white outline-none"
          required
        />

        <button
          type="submit"
          className="w-full bg-white text-black p-4 rounded-xl font-semibold hover:bg-zinc-200 transition"
        >
          Login
        </button>

        <p className="text-zinc-400 text-center mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-white hover:underline"
          >
            Register
          </Link>
        </p>
      </form>

    </div>
  );
}