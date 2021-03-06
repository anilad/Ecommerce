import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark primary-color">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="basicExampleNav">
                <div className="navbar-nav nav-item mr-auto">
                    <Link to="/" className="nav-link ">Home</Link>
                    <Link to="/about" className="nav-link">Link</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    <Link to="/admin" className="nav-link">Admin</Link>
                </div>
                <div className="navbar-nav nav-item">
                    <Link className="nav-link" to="/login"> Login</Link>
                    <Link className="nav-link" to="/register"> Register</Link>
                </div>
            </div>
        </nav>
    );
}
export default Header;