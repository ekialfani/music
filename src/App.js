import * as React from 'react';
import Home from './navbar/home';
import Playlist from './navbar/playlist';
import { NavLink, Outlet } from 'react-router-dom';


function Menu(){
  return (
    <ul className="ml-5">
      <h3 className="text-slate-500 mb-3">Menu</h3>
      
      <li>
        <NavLink 
          to="home"
          className={({isActive}) => isActive ? "text-red-500 border-r-2 border-red-500 block" : "text-slate-400"}>
            <p className="flex items-center space-x-3 font-medium text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span>Home</span>
            </p>
        </NavLink>
      </li>

      <li>
        <NavLink 
          to="playlist"
          className={({isActive}) => isActive ? "text-red-500 border-r-2 border-red-500 block" : "text-slate-400"}>
          <p className="flex space-x-3 font-medium my-3 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
            </svg>
            <span>Playlist</span>
          </p>
        </NavLink>
      </li>
    </ul>
  )
}


function Logo(){
  return <h1 className="text-2xl font-bold m-6">Music</h1>;
}


function App(){
  return (
    <div className="grid grid-cols-[200px_1fr]">
      <nav className="border-r border-slate-300">
        <Logo />
        <Menu />
      </nav>
        <Outlet />
    </div>
  )
}

export default App;
