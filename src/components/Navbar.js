import React from "react";

const Navbar = ({ userLoggedIn, setUserLoggedIn }) => {
  return (
    <div
      className={`h-16 flex items-center bg-sky-900
                text-gray-50 justify-between px-12`}
    >
      <span className="text-3xl">ToDo</span>
      {userLoggedIn && (
        <button
          onClick={() => setUserLoggedIn(false)}
          className="px-6 py-2 rounded-sm hover:bg-sky-600 bg-sky-700"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Navbar;
