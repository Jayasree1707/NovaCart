import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      alert("Registration Successful");

      console.log(res.data);
    } catch (error) {
      console.log(error);
      alert("Registration Failed");
    }
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-3xl w-[450px]"
      >
        <h1 className="text-white text-4xl font-bold mb-6">
          Register
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-4 mb-4 rounded-xl bg-zinc-800 text-white"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-4 mb-4 rounded-xl bg-zinc-800 text-white"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-4 mb-6 rounded-xl bg-zinc-800 text-white"
        />

        <button
          type="submit"
          className="w-full bg-white text-black p-4 rounded-xl"
        >
          Register
        </button>
      </form>
    </div>
  );
}