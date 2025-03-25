import React from "react";
import { useSelector } from "react-redux";
import ChangePassword from "../components/ChangePassword";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return (
      <p className="text-center text-xl mt-10">
        Please log in to view your profile.
      </p>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-5">Profile</h2>
      <div className="flex flex-col items-center gap-4">
        {user.photoURL ? (
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-gray-300"
          />
        ) : (
          <div className="w-24 h-24 flex items-center justify-center bg-gray-300 text-gray-700 rounded-full">
            {user.displayName?.charAt(0).toUpperCase()}
          </div>
        )}
        <p className="text-lg font-semibold">{user.displayName || "No Name"}</p>
        <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
        <p className="text-gray-600 dark:text-gray-400">
          Password: {user.password ? user.password : "Not available"}
        </p>
        <ChangePassword />
      </div>
    </div>
  );
};

export default Profile;
