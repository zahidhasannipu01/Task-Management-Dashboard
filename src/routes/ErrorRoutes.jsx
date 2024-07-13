import Error404 from "../views/404/Error404";

const ErrorRoutes = {
	path: "*",
	element: <Error404 />,
	children: [
		{
			path: "*",
			element: <Error404 />,
		},
	],
};

export default ErrorRoutes;
