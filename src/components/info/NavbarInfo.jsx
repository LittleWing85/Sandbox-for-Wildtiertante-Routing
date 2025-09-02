import { NavLink } from "react-router-dom";

export default function NavbarInfo() {
    return (
        <div className="navbar">
            <NavLink className="navlink" to="bunnies">
                Bunnies
            </NavLink>
            <NavLink className="navlink" to="squirrels">
                Squirrels
            </NavLink>
            <NavLink className="navlink" to="equipment">
                Equipment
            </NavLink>
            <NavLink className="navlink" to="milk">
                Milk
            </NavLink>
        </div>
    );
}
