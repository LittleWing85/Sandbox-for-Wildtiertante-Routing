import { NavLink } from "react-router-dom";

export default function NavbarInfo() {
    return (
        <div className="navbar">
            <NavLink className="navlink" to="/info/bunnies">
                Bunnies
            </NavLink>
            <NavLink className="navlink" to="/info/squirrels">
                Squirrels
            </NavLink>
            <NavLink className="navlink" to="/info/equipment">
                Equipment
            </NavLink>
            <NavLink className="navlink" to="/info/milk">
                Milk
            </NavLink>
        </div>
    );
}
