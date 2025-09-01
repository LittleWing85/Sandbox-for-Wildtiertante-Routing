import { NavLink } from "react-router-dom";

export default function NavigationMain() {
    return (
        <div className="navbar">
            <div>
                <NavLink to="/">Info</NavLink>
            </div>
            <div>
                <NavLink to="/tool">Tool</NavLink>
            </div>
            <div>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            <div>
                <NavLink to="/about">About</NavLink>
            </div>
        </div>
    );
}
