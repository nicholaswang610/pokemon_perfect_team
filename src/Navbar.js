import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const Navbar = (props) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container my-2">
                <img className="logo" alt="PokeTeam Builder" src={require("./images/PokeTeam-Builder.png")}></img>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <div className="cart">
                            <NavLink className="nav-link" to="/my-team">My Team <span className="track-cart-items">{props.chosen.length}</span></NavLink>
                        </div>
                    </li>
                </ul>  
            </div>    
        </nav>
        
    );
}

const mapStateToProps = (state, ownProps) => {
    return (
        {
            chosen: state.chosen
        }
    );
}

export default connect(mapStateToProps)(withRouter(Navbar));
