import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header />
      <main className="max-w-7xl mx-auto px-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
