import { createBrowserRouter } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import MainRoutes from "./MainRoutes";
import ErrorRoutes from "./ErrorRoutes";

const router = createBrowserRouter([AuthRoutes, MainRoutes, ErrorRoutes]);

export default router;
