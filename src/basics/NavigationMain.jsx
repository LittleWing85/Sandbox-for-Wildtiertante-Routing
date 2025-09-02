import { NavLink } from "react-router-dom";

export default function NavigationMain() {
    return (
        <div className="navbar">
            <NavLink className="navlink" to="/info">
                Info
            </NavLink>

            <NavLink className="navlink" to="/tool">
                Tool
            </NavLink>

            <NavLink className="navlink" to="/contact">
                Contact
            </NavLink>

            <NavLink className="navlink" to="/about">
                About
            </NavLink>
        </div>
    );
}
