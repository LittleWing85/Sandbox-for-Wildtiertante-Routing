import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
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
            <Route index element={<Info />} />
            <Route path="/info" element={<Info />}>
                <Route index element={<InfoBunnies />} />
                <Route path="/info/bunnies" element={<InfoBunnies />} />
                <Route path="/info/squirrels" element={<InfoSquirrels />} />
                <Route path="/info/equipment" element={<InfoEquipment />} />
                <Route path="/info/milk" element={<InfoMilk />} />
            </Route>
            <Route path="/tool" element={<Tool />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
        </Route>
    )
);

export default function App() {
    return <RouterProvider router={router} />;
}
