import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import UserInformation from "../components/UserInformation/UserInformation";
import ThemeColor from "../GlobalColor";
function MainLayout() {
	return (
		<>
			<div
				className='w-full h-full   flex flex-row'
				style={{ backgroundColor: `${ThemeColor.primary}` }}>
				<Sidebar />
				<div
					className='flex flex-col flex-1 lg:relative left-[0.95rem]  lg:rounded-br-3xl  lg:rounded-tr-3xl'
					style={{ backgroundColor: `${ThemeColor.primary}` }}>
					<Header />
					<div className='mt-20 lg:mt-10 lg:p-5'>
						<Outlet />
					</div>
				</div>
				<UserInformation />
			</div>
		</>
	);
}

export default MainLayout;
