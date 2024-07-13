import MainLayout from "../Layout/Index";
import Analytics from "../views/Analytics/Analytics";
import Dashboard from "../views/Dashboard/Dashboard";
const MainRoutes = {
	path: "/",
	element: <MainLayout />,
	children: [
		{
			path: "/analytics",
			element: <Analytics />,
		},
		{
			path: "/dashboard",
			element: <Dashboard />,
		},
	],
};

export default MainRoutes;
