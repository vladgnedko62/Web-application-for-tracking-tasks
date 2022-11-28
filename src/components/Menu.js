import React from "react";
import { Link } from "react-router-dom"; 

export default function Menu(){


    return(
        <>
        <div className="menu">
        <Link to='/' className="linkElement">
          Home
        </Link>
        <Link to='/projects' className="linkElement">
          Projects
        </Link>
      </div>
        </>
    )
}