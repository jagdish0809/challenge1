import React from 'react';
import search from "../assests/Component 32.svg";
import filter from "../assests/Component 39 (2).svg";

const Header = () => {
  return (
    <div className="max-w-[1200px] w-[96vw] h-[80px] flex space-x-[30px] justify-between">
      <div className="max-w-[260px] flex items-center pl-8 rounded-lg w-full bg-white">
        <h1 className="logo text-3xl">LOGO</h1>
      </div>
      <div className="max-w-[620px] px-[30px] flex items-center rounded-lg w-full bg-white justify-between">
        <div className="flex items-center">
          <img src={search} alt="search icon" className="mx-2" />
          <input
            type="text"
            placeholder="Search here..."
            name=""
            id=""
            className="border-none outline-none"
          />
        </div>
        <div className="flex items-center">
          <img src={filter} alt="filter icon" />
          <p>Filter</p>
        </div>
      </div>
      <div className="max-w-[260px] flex items-center justify-center rounded-lg w-full bg-[#88C2BB] text-white">
        <h1>Become a Seller</h1>
      </div>
    </div>
  );
}

export default Header