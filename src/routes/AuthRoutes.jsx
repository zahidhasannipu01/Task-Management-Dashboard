import Login from "../views/Auth/Login";

const AuthRoutes = {
	path: "/login",
	element: <Login />,
	children: [
		{
			path: "/login",
			element: <Login />,
		},
	],
};

export default AuthRoutes;
