import React from 'react';
import '../styles/navbar.css'

//NavBar es una función stateless, no tiene estado, ya que siempre debe renderizar lo mismo
const NavBar = ({ firstName, opcion }) => {
    return (
        <nav className='navbar'>
            <div className='container'>
                <a className='navbar-brand' href='/login'>
                    {firstName}
                </a>
                <div id='user-profile'>
                    <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                    <a style={{fontWeight: "normal"}} className='navbar-brand' href='/login'>
                        {opcion}
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;