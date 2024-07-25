import { }from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
            </ul>
        </nav>
    );
};
export default Navbar;