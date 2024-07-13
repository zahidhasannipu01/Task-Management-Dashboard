import { RouterProvider } from "react-router-dom";

import router from "../src/routes/Index";
import MainLayout from "./Layout/Index";

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
