import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Root from "./basics/Root";
import Info from "./components/info/Info";
import Tool from "./components/tool/Tool";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<Info />} />
            <Route path="/tool" element={<Tool />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
        </Route>
    )
);

export default function App() {
    return <RouterProvider router={router} />;
}
