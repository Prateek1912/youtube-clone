import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { openMenu, toggleMenu } from '../utils/appSlice';
import { Link, useLocation } from 'react-router-dom';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { FaBars, FaBell, FaMicrophone, FaSearch, FaVideo } from 'react-icons/fa';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchContainerRef = useRef(null);
  const dispatch = useDispatch();
  const searchCache = useSelector(store => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery])
        setSuggestions(searchCache[searchQuery]);
      else
        getSearchSuggestions();
    }, 200);
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setShowSuggestions(false); // Hide suggestions when clicked outside
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener when component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(timer);
    };
  }, [searchQuery])

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery]: json[1]
    }))
  };
  
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    setShowSuggestions(e.target.value.length > 0); // Show suggestions only if there's input
  };

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 p-2 flex items-center justify-between">
      {/* Left Section: Logo and Menu */}
      <div className="flex items-center space-x-4">
        <FaBars
          onClick={() => toggleMenuHandler()}
          className="text-gray-600 text-2xl cursor-pointer"
        />
        <Link to={"/"}>
          <img
            onClick={() => dispatch(openMenu())}
            src="https://cdn.iconscout.com/icon/free/png-512/free-youtube-82-189778.png?f=webp&w=512" // You can add the actual YouTube logo or your own
            alt="YouTube Logo"
            className="h-11 cursor-pointer"
          />
        </Link>
      </div>

      {/* Middle Section: Search Bar */}
      <div
        ref={searchContainerRef}
        className="flex-grow max-w-2xl mx-4 flex items-center"
      >
        <div className="relative w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            className="w-full p-2 pl-4 border border-gray-300 rounded-full focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Search"
            onFocus={() => setShowSuggestions(searchQuery.length > 0)} // Show suggestions when focusing on input
          />
          <button className="absolute right-0 top-0 bottom-0 bg-gray-100 border-l border-gray-300 p-2 px-4 rounded-r-full">
            <FaSearch className="text-gray-600" />
          </button>
          {showSuggestions && (
            <ul className="absolute left-0 right-0 bg-white border border-gray-200 mt-2 rounded-lg shadow-lg max-h-112 z-50">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    // Select suggestion on click
                    setShowSuggestions(false); // Hide suggestions after selection
                  }}
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        <FaMicrophone className="ml-3 text-gray-600 text-2xl cursor-pointer" />
      </div>

      {/* Right Section: Icons */}
      <div className="flex items-center space-x-4">
        <FaVideo className="text-gray-600 text-2xl cursor-pointer" />
        <FaBell className="text-gray-600 text-2xl cursor-pointer" />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg" // Replace with a profile image path
          alt="User Avatar"
          className="w-8 h-8 rounded-full cursor-pointer"
        />
      </div>
    </header>
  );
}

export default Head