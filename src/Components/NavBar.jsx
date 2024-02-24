import React from 'react';
import { Link } from 'react-router-dom';
import './style/NavBar.css'

const NavBar = () => {
    return (
        <div>
            {/* <div className="container-fluid"> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="navbar-collapse collapse show container" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0" id="ul-texts">
                            <li className="nav-item mx-1"><Link to="/" className="nav-link active texts" aria-current="page">Home</Link></li>
                            <li className="nav-item mx-1"><Link to="/userDetails" className="nav-link active" aria-current="page">User Details</Link></li>
                        </ul>
                    </div>
                </nav>
            {/* </div> */}
        </div>
    );
};

export default NavBar;
