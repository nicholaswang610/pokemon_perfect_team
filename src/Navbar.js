import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container my-2">
                <a className="navbar-brand">Pok&eacute;-Team Builder</a> 
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/my-team">My Team</NavLink>
                    </li>
                </ul>  
            </div>    
        </nav>
        
    );
}

export default withRouter(Navbar);