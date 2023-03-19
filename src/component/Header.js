import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='header'>
         <div className='container'>
            <div className='logo'>
               <Link  to="/"> Movies</Link>
            </div>
            <ul className='nav-links'>
                <li>
                    <Link to="/">
                       Watch List   
                    </Link>
                </li>
                <li>
                    <Link to="whaced">
                       Watched   
                    </Link>
                </li>
                <li>
                    <Link className='btn' to ="add">
                       Add   
                    </Link>
                </li>
            </ul>
        </div> 
        
    </div>
  )
}

export default Header
