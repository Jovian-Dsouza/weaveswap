import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

const SearchInput = ({onChange}) => {
  return (
    <div className="flex items-center border border-lightGray rounded-lg focus:border-blue-500 ">
      <MagnifyingGlassIcon className="h-5 w-5 text-lightGray ml-2" />
      <input
        type="text"
        placeholder="Search"
        onChange={onChange}
        className="placeholder-lightGray text-gray-500 font-bold w-64 py-2 px-4 focus:outline-none bg-black rounded-lg"
      />
    </div>
  );
};

export default SearchInput;
