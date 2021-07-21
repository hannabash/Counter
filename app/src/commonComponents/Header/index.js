import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "./../../Routes/routeNames";
import navItems from './config/navItems'

const Header = () => {
   return (
      <div>
         {navItems.map(({title, path}) => (
            <Link to={path} key={path}>
            <button>{title}</button>
            </Link>
         ))}
      </div>
   );
};

export default Header;
