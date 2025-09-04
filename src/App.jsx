import { Suspense, lazy } from "react";
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
    Navigate,
} from "react-router-dom";
import Root from "./basics/Root";
import LayoutRoute from "./LayoutRoute";
import Info from "./components/info/Info";
import InfoBunnies from "./components/info/InfoBunnies";
const InfoSquirrels = lazy(() => import("./components/info/InfoSquirrels"));
const InfoEquipment = lazy(() => import("./components/info/InfoEquipment"));
const InfoMilk = lazy(() => import("./components/info/InfoMilk"));
import Tool from "./components/tool/Tool";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<Navigate to="Info" replace />} />
            <Route path="info" element={<Info />}>
                <Route index element={<InfoBunnies />} />
                <Route path="bunnies" element={<InfoBunnies />} />
                <Route element={<LayoutRoute />}>
                    <Route path="squirrels" element={<InfoSquirrels />} />
                    <Route path="equipment" element={<InfoEquipment />} />
                </Route>
                <Route
                    path="milk"
                    element={
                        <Suspense fallback={<div>Loading</div>}>
                            <InfoMilk />
                        </Suspense>
                    }
                />
            </Route>
            <Route path="tool" element={<Tool />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
        </Route>
    )
);

export default function App() {
    return <RouterProvider router={router} />;
}
