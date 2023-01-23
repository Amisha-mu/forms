import React , {useState}from 'react';
import{Link} from "react-router-dom";
import { ServicesDropdown } from "./navitems";
import "./dropdown.css";

function DropDown() {
  const [dropdown, setdropdown] =useState(false);

  return(
   <>
   <ul className={dropdown ?'Services-submenu clicked' : "Services-submenu"}
    onClick={() =>setdropdown(!dropdown)}>
    {ServicesDropdown.map((item) => {
     return(
      <li key={item.id} >
        <Link to={item.path} className={item.cName}
        onClick={() =>setdropdown(false)}>
          {item.tittle}
          </Link>
        </li>
     );
    })}
   </ul>
   </>
  );
}

export default DropDown;