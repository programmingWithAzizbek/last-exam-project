import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { login, loginWithGoogle } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData.email, formData.password);
  };

  return (
    <div className="flex min-h-screen w-screen">
      <div className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-amber-400 animate-gradient flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="px-8 py-5 max-w-96 flex flex-col gap-y-3 w-full bg-white shadow-lg rounded-lg"
        >
          <h2 className="text-3xl font-bold mb-3">Login</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border px-3 py-2 w-full rounded-lg"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border px-3 py-2 w-full rounded-lg"
          />
          <button
            type="submit"
            className="px-6 py-2 w-full text-white font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-amber-400 rounded-lg"
          >
            Login
          </button>
          <button
            type="button"
            onClick={loginWithGoogle}
            className="px-6 py-2 w-full flex items-center justify-center gap-x-2 text-white font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-amber-400 rounded-lg"
          >
            Login with <FcGoogle />
          </button>
          <NavLink to={"/register"}>Register</NavLink>
        </form>
      </div>
    </div>
  );
};

export default Login;
