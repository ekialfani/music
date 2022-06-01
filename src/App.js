import * as React from 'react';
import Home from './navbar/home';
import Playlist from './navbar/playlist';
import { Routes, Route, NavLink, Outlet } from 'react-router-dom';



function NotFound(){
  return <h2>Page Not Found</h2>
}

function Menu(){
  return (
    <ul className="ml-8 text-slate-400 text-sm font-medium">

      <h3 className="mt-8 mb-3 font-normal">
        Menu
      </h3>
      
      <li className="mb-3">
        <NavLink
          to="/"
          className="hover:text-red-500">
          {({isActive}) => (
            <div className={isActive ? "text-red-600 border-r-2 border-red-600" : ""}>
              <p className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>

                <span>Home</span>
              </p>
            </div>
          )}
        </NavLink>
      </li>

      <li>
        <NavLink 
          to="/playlist"
          className="hover:text-red-500">
          {({isActive}) => (
            <div className={isActive ? "text-red-600 border-r-2 border-red-600" : ""}>
              <p className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                </svg>

                <span>Playlist</span>
              </p>
            </div>
          )}
        </NavLink>
      </li>

    </ul>
  )
}


function Logo(){
  return (
    <h1 className="text-3xl font-bold mx-8 mt-12 mb-5">
      <span className="text-red-600">M</span>usric
    </h1>
  );
}


function Layout(){
  return (
    <div className="grid grid-cols-[200px_1fr] h-[100vh]">
      <nav className="border-r border-slate-300">
        <Logo />
        <Menu />
      </nav>

      <Outlet />
    </div>
  )
}


function App(){
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="playlist" element={<Playlist />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
