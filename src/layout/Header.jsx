import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgSearch } from "react-icons/cg";
import { TbPhotoScan } from "react-icons/tb";
import DarkMode from "../components/DarkMode";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShow = () => {
    setShowMenu(!showMenu);
  };

  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      {/* {isAuthenticated && (
        <div className="w-full bg-[#111] dark:bg-white">
          <div className="w-full px-2 py-[9px] flex justify-center">
            <div className="max-w-3xl flex items-center">
              <p className="text-white dark:text-black">
                Your Emalil <span></span>
              </p>
            </div>
          </div>
        </div>
      )} */}
      <header className="bg-white dark:bg-black sticky top-0 z-50">
        <nav className="w-full px-5 py-[11px] flex items-center justify-between gap-x-5 border-b">
          <NavLink>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="E18si dark:bg-white dark:outline"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              version="1.1"
              aria-labelledby="unsplash-home"
              aria-hidden="false"
              style={{ flexShrink: 0 }}
            >
              <desc lang="en-US">Unsplash logo</desc>
              <title id="unsplash-home">Unsplash Home</title>
              <path
                d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"
                className="st-current dark:bg-white"
                data-label="path"
              />
            </svg>
          </NavLink>
          <div className="relative w-full">
            <button className="absolute top-2 left-5">
              <CgSearch className="w-6 h-6" />
            </button>
            <input
              type="search"
              name="Search"
              placeholder="Search photos and illustrations"
              className="border rounded-full px-16 py-2 w-full focus:outline-none bg-[#E7E7E7] focus:bg-white"
            />
            <button>
              <TbPhotoScan className="absolute w-6 h-6 top-2 right-5" />
            </button>
          </div>
          <NavLink to="/login" className="text-sm">
            Login
          </NavLink>
          <NavLink to="/register" className="text-sm">
            Register
          </NavLink>
          <DarkMode />
          <button onClick={handleShow} className="relative p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-black dark:text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M3 16h18v2H3v-2ZM3 6v2h18V6H3Zm0 7h18v-2H3v2Z" />
            </svg>
            {showMenu && (
              <div className="absolute w-[600px] h-[300px] right-1 top-12 bg-white shadow shadow-gray-400 dark:bg-black rounded-lg p-5">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <h3 className="font-bold mb-2">Company</h3>
                    <ul className="space-y-1 flex flex-col gap-y-2">
                      <li>About</li>
                      <li>History</li>
                      <li>Join the team</li>
                      <li>Blog</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Product</h3>
                    <ul className="space-y-1 flex flex-col gap-y-2">
                      <li>Developers/API</li>
                      <li>Unsplash Dataset</li>
                      <li>Apps & Plugins</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Community</h3>
                    <ul className="space-y-1 flex flex-col gap-y-2">
                      <li>Become a Contributor</li>
                      <li>Collections</li>
                      <li>Trends</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
