import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Start from "./components/start/Start";

const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Start />} />)
);

export default function App() {
    return <RouterProvider router={router} />;
}
