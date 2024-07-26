// import { useState, useEffect } from "react";
import { Link }from "react-router-dom";
import {useContext }from 'react';
import { AuthContext }from './authContext';

const Navbar = () => {
    const { user } = useContext(AuthContext)

    // useEffect(() => {
    //     const user = auth.currentUser;
    //     if (user) {
    //         setUser(user);
    //     }
    // }, [auth.currentUser]);

    // const [user, setUser] = useState(null);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/contact">Contact</a>
                    </li>
                    <li className="nav-item"></li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Cuenta
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/login">Login</a></li>
                        <li><a className="dropdown-item" href="/register">Register</a></li>
                    </ul>
                    </li>
                    {user && (
                        <li className="nav-item">
                            <Link className="nav-link" to="/user-profile">
                                proyectos
                            </Link>
                        </li>
                    )}
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <p>{user ? user.displayName : 'usuario'}</p>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;