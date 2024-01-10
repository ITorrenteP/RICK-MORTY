import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react"
import SearchBar from "./SearchBar";


function Nav({onSearch}) {
    return (


    <div className="nav-container">
      <NavLink to="/about">
      <button>About </button> 
      </NavLink>
      
      <NavLink to="/favorites">
      <button>Favorites</button>
      </NavLink>
      
      <NavLink to="/home">
      <button>Home</button> 
      </NavLink>

      <SearchBar onSearch={onSearch}/>  
    </div>
    )
}


export default Nav