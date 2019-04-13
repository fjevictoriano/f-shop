import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";

const SearchBar = () => (
  <div className="w-full flex mb-4">
    <div className="flex w-full py-2 bg-grey-lighter ">
      <input
        className="flex-1 h-10 input"
        placeholder="Enter your search term here"
        type="text"
        name="query"
      />
      <button
        className="btn-green 
								h-10
								w-16
								m-2"
        type="submit"
      >
        Search
      </button>
      <div
        className="w-8 mx-1 text-center m-2 py-3 cursor-pointer"
        type="submit"
      >
        <FaFilter />
      </div>
    </div>
  </div>
);

export default SearchBar;
