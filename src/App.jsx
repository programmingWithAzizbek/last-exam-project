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

const App = () => {
  return (
    <DarkModeProvider>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/likes" element={<Likes />}></Route>
          </Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </DarkModeProvider>
  );
};

export default App;
