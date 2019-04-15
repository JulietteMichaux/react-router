import React from 'react';
import { NavLink } from 'react-router-dom';

const style = {
    fontWeight: "bold",
    color: "red"
  }

const Navigation = () => {
    return (
    <div>
        <NavLink exact to="/"> Home </NavLink>
        <NavLink to="/notre-histoire"  
        activeStyle={style}> 
        History 
        </NavLink> 
    </div>
    )
}

export default Navigation;