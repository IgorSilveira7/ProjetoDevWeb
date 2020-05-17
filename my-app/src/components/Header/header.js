import React from 'react';
import './styles.css';


function Header() {
    return(
        <div className='header'>
            <div className='logo'>
            <h1>Header</h1>
            </div>
            
            <div className='nav'>
            <ul>
                <li><a>Home</a></li>
                <li><a>Favoritos</a></li>
            </ul>
            </div>
        </div>

       
    );
}

export default Header;