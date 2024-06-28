import React, { useState, useEffect, useRef } from "react";

const BLogSearchBar = ({ sortOrder, toggleSortOrder, setResults }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(sortOrder);
  const [query, setQuery] = useState("");

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    toggleSortOrder(option);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = async (e) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8787/api/v1/blog/search/${query}`
      );
      const data = await response.json();
      console.log(data);
      setResults(data);
    } catch (error) {
      console.log(error);
      setResults(false);
    }
  };

  return (
    <div className="flex items-center bg-white rounded-full shadow-lg border border-[#233780]">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="flex items-center w-[80px] md:w-auto lg:w-auto justify-center lg:px-4 md:px-4 py-2 inter font-semibold rounded-l-full bg-blue-800 text-white"
        >
          {selectedOption}
          <svg
            className="ml-2 w-4 h-4 inline-block"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-[#1F4386] text-white rounded-lg shadow-lg z-10">
            <ul className="py-1">
              <li
                onClick={() => handleOptionClick("Latest")}
                className="cursor-pointer px-4 inter py-2 hover:bg-blue-200 hover:text-[#233780]"
              >
                Latest
              </li>
              <li
                onClick={() => handleOptionClick("Oldest")}
                className="cursor-pointer px-4 py-2 inter hover:bg-blue-200 hover:text-[#233780]"
              >
                Oldest
              </li>
            </ul>
          </div>
        )}
      </div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        type="text"
        className="flex-grow md:px-4 lg:px-4 py-2 text-gray-700 bg-transparent focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="flex-shrink-0 px-2 md:px-4 lg:px-4 py-2 text-gray-400"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386a1 1 0 01-1.414 1.415l-4.387-4.387zM8 14A6 6 0 108 2a6 6 0 000 12z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default BLogSearchBar;
