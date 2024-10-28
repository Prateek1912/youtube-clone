import React from 'react'
import Sidebar from './Sidebar'
import Buttonlist from './Buttonlist'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import Head from './Head'

const Body = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <Outlet/>
    </div>
  );
}

export default Body