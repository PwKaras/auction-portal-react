import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => (

    <nav className="navbar navbar-expand navbar-light ml-0 pl-0">
       
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active ">
                    <NavLink exact to="/" className="nav-link text-primary" activeClassName="font-weight-bold">Aukcje<span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink exact to="/promotions" className="nav-link text-primary" activeClassName="font-weight-bold">Promocje</NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink exact to="/suggestions" className="nav-link text-primary" activeClassName="font-weight-bold">Podpowiadamy </NavLink>
                </li>

            </ul>
        </div>
    </nav>

)