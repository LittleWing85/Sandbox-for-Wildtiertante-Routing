import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Root from "./basics/Root";

const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Root />} />)
);

export default function App() {
    return <RouterProvider router={router} />;
}
