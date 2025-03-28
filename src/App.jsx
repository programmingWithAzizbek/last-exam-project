import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import DarkModeProvider from "./layout/DarkModeProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import Likes from "./pages/Likes";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <DarkModeProvider>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/likes" element={<Likes />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Analytics />
    </DarkModeProvider>
  );
};

export default App;
