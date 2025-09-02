import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
    Navigate,
} from "react-router-dom";
import Root from "./basics/Root";
import Info from "./components/info/Info";
import InfoBunnies from "./components/info/InfoBunnies";
import InfoSquirrels from "./components/info/InfoSquirrels";
import InfoEquipment from "./components/info/InfoEquipment";
import InfoMilk from "./components/info/InfoMilk";
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
                <Route path="squirrels" element={<InfoSquirrels />} />
                <Route path="equipment" element={<InfoEquipment />} />
                <Route path="milk" element={<InfoMilk />} />
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
