import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg col-span-1 mt-20">
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Live</li>
        <li>News</li>
      </ul>
    </div>
  );
}

export default Sidebar