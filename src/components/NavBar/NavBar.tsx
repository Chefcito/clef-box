import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return <nav className="nav-bar">
        <div className="nav-bar__logo">
            <Link className="nav-bar__logo__link" to="/">
                <img className="nav-bar__logo__link__img" alt="logo" src={require('../../resources/icons/logo.png')}/>
            </Link>
        </div> 

        <div className="nav-bar__items">
            <Link className="nav-bar__items__link" to="/">
                <h2 className="nav-bar__items__link__h2">Playlists</h2>
            </Link>

            <Link className="nav-bar__items__link" to="/Explore">
                <h2 className="nav-bar__items__link__h2">Explorar</h2>
            </Link>

            <Link className="nav-bar__items__link" to="/Profile">
                <h2 className="nav-bar__items__link__h2">Mi Perfil</h2>
            </Link>

            <Link className="nav-bar__items__link" to="/Login">
                <h2 className="nav-bar__items__link__h2">Salir</h2>
            </Link>
        </div>
    </nav>;
}

export default NavBar;