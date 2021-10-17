import React from 'react'
import { BiLock } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'
import routesList from '../routes';
function Topbar() {
  const location = useLocation();
  const routes = routesList.getRoutes();
  return (
    <header className="text-gray-600 body-font sticky top-0 bg-white bg-opacity-80 z-50">
      <div className="flex flex-wrap py-5 flex-col md:flex-row items-center">
        <nav className="flex flex-wrap items-center text-base">
          {
            routes.map((route) => (
              <Link
                className={`${location.pathname === route.path ? "bg-black text-white" : "hover:bg-black hover:text-white"} font-bold mr-5 text-sm px-2 py-1 transition-colors rounded-full`}
                to={route.path}>
                {route.name}
              </Link>
            ))
          }
        </nav>
      </div>
    </header>
  )
}

export default Topbar
