import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export default function InfoLayout() {
    return (
        <Suspense fallback={<div>Lade Info-Seite...</div>}>
            <Outlet />
        </Suspense>
    );
}
