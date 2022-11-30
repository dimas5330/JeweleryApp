import React from "react";
import '../App.css'

const Navbar = ({setToken}) => {
    const logOutHandler = () => {
        setToken("");
        localStorage.clear();
    };
    return (
        <div className="navbar">
            <h1>Jewelery App</h1>
            <button className="log-out-btn" onClick={()=>logOutHandler()}>LOGOUT</button>
         </div> 
    )
}

export default Navbar