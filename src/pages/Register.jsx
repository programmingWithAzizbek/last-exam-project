import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { register, loginWithGoogle } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    await register(formData.displayName, formData.email, formData.password);
  };

  return (
    <div className="flex min-h-screen w-screen">
      <div className="w-2/5 bg-[url('https://picsum.photos/900/1200')] bg-center bg-cover"></div>
      <div className="w-3/5 bg-gradient-to-r from-pink-500 via-purple-500 to-amber-400 animate-gradient flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="px-8 py-5 max-w-96 w-full bg-white shadow-lg rounded-lg"
        >
          <h2 className="text-3xl font-bold mb-3">Register</h2>
          <div className="flex flex-col gap-y-3">
            <input
              type="text"
              name="displayName"
              placeholder="Full Name"
              value={formData.displayName}
              onChange={handleChange}
              className="border px-3 py-2 w-full rounded-lg"
            />
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
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="border px-3 py-2 w-full rounded-lg"
            />
            <button
              type="submit"
              className="px-6 py-2 w-full text-white font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-amber-400 rounded-lg"
            >
              Register
            </button>
            <button
              type="button"
              onClick={loginWithGoogle}
              className="px-6 py-2 w-full flex items-center justify-center gap-x-2 text-white font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-amber-400 rounded-lg"
            >
              Register with <FcGoogle />
            </button>
            <NavLink to={"/login"}>Login</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
