import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex min-h-screen w-screen">
      <div className="w-2/5 bg-[url('https://picsum.photos/900/1200')] bg-center bg-cover"></div>
      <div className="w-3/5 bg-gradient-to-r from-pink-500 via-purple-500 to-amber-400 bg-[length:200%_200%] animate-gradient flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="px-8 py-5 max-w-96 w-full bg-white shadow-lg rounded-lg dark:bg-gray-950"
        >
          <h2 className="text-3xl font-bold inline-block mb-3">Register</h2>
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
              className="px-6 py-2 w-full text-white text-lg font-semibold rounded-lg shadow-md bg-gradient-to-r from-pink-500 via-purple-500 to-amber-400 bg-[length:200%_200%] animate-gradient"
            >
              Register
            </button>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/login"}>Login</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
