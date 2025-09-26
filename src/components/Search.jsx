import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useDebounce } from "use-debounce";
import { useResultContext } from "../context/ResultContextProvider";

export const Search = () => {
  const [text, setText] = useState("java");
  const [debouncedValue] = useDebounce(text, 500);
  const { setSearchTerm } = useResultContext("java");

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue, setSearchTerm]);

  return (
    <div className="flex mx-2 bg-white  text-black border border-gray-400 rounded-full items-center w-full max-w-md">
      <input
        type="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="p-2 pl-3 flex-grow text-black rounded-l-full outline-none"
        placeholder="Search..."
      />
      <button
        onClick={() => setSearchTerm(text)}
        className="m-2 p-2 text-green-400 hover:text-green-600 transition"
      >
        <FaSearch />
      </button>
    </div>
  );
};
