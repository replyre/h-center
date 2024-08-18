import React from "react";

const Header = () => {
  return (
    <header className="bg-black p-2 md:px-32 flex justify-between items-center">
      <h1 className="text-white text-sm md:text-lg flex gap-1">
        <img src="logo.png"></img>{" "}
        <span className="md:flex hidden gap-1 ">
          Abstract
          <span className="md:text-2xl text-md ">|</span> Help Center
        </span>
      </h1>{" "}
      <button className="bg-black text-white md:px-4 p-2  text-sm md:text-base border rounded-md border-white hover:bg-white hover:text-black">
        Submit a request
      </button>
    </header>
  );
};

export default Header;
