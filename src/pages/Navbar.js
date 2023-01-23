import React, {useState} from "react";
import{Link} from "react-router-dom";
import { navItems } from "./navitems";
import "./NavBar.css";
import DropDown from "./dropdown";

function Navbar(){
  const[dropdown, setdropdown]= useState(false);
  return(
    <>
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
      </Link>
      <ul className="nav-items">
        {navItems.map((item) =>{
          if(item.tittle === 'Services'){
          return(
          <li key={item.id} className={item.cName}>
            <Link to={item.path}
            onMouseEnter={() => setdropdown(true)}
         onMouseLeave={() => setdropdown(false)}>
          {item.tittle}
          </Link>
            { dropdown && <DropDown />}
          </li>
          );
          }
       
      return(
          <li key={item.id} className={item.cName}>
            <Link to={item.path}>{item.tittle}</Link>
          </li>
      );
 })};
</ul>
    </nav>
    </>
  );
};

 export default Navbar;