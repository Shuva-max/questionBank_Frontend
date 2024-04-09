import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
    return(

        <nav style={{ backgroundColor: '#395995', padding: '15px' }}>
        <Link to="/" style={{ color: '#fff', marginRight: '20px' }}>Home</Link>
        <Link to="/about" style={{ color: '#fff', marginRight: '15px' }}>About</Link>
        </nav>
        
    );
};

export default Navbar;