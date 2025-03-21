import { useEffect } from "react";
import { useSelector } from "react-redux";

const DarkModeProvider = ({ children }) => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return <>{children}</>;
};

export default DarkModeProvider;
