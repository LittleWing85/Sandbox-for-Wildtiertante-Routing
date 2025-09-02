import { Outlet } from "react-router-dom";
import NavbarInfo from "./NavbarInfo";

export default function Info() {
    return (
        <>
            <NavbarInfo />
            <Outlet />
        </>
    );
}
