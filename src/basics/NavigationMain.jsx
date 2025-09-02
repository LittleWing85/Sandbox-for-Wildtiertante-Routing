import { NavLink } from "react-router-dom";

export default function NavigationMain() {
    return (
        <div className="navbar">
            <div>
                <NavLink className="navlink" to="/">
                    Info
                </NavLink>
            </div>
            <div>
                <NavLink className="navlink" to="/tool">
                    Tool
                </NavLink>
            </div>
            <div>
                <NavLink className="navlink" to="/contact">
                    Contact
                </NavLink>
            </div>
            <div>
                <NavLink className="navlink" to="/about">
                    About
                </NavLink>
            </div>
        </div>
    );
}
