import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(){
return(
    <nav>
    <Link style={{fontSize:"20px", margin: "20px", display: "inline-block"}} to="/">Home</Link>
    <Link style={{fontSize:"20px", margin: "20px", display: "inline-block"}} to="/F">Favorite Page</Link>
    </nav>
)
}