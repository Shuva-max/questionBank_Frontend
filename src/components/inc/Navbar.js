import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const locatioon = useLocation();
    // console.log(locatioon)
    return (

        <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:'#213d71'}}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/"  className= {`nav-link ${locatioon.pathname==='/'?'active':''} text-light`} aria-current="page" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about"  className= {`nav-link ${locatioon.pathname==='/about'?'active':''} text-light`} aria-current="page" >About</Link>
                        </li>
        
                    </ul>
        
                </div>
            </div>
        </nav>

    );
};

export default Navbar;