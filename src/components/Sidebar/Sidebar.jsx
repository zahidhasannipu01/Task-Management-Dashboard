import ThemeColor from "../../GlobalColor";
import Logo from "../../../public/assets/logo.svg";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import MenuItems from "../../menu-items/MenuItems";

const Sidebar = () => {
	const [isCollapsed, setisCollapsed] = useState(false);
	return (
		<div
			className={`  hidden  lg:block duration-300 border-r border-gray-50/10 ${
				isCollapsed ? "w-[75px]" : "w-[250px]"
			}  h-screen flex flex-col`}
			style={{ backgroundColor: `${ThemeColor.primary}` }}>
			<div className='relative flex justify-between items-center p-[20px] '>
				<div className='m-auto'>
					<img src={Logo} alt='' />
				</div>
				<div
					onClick={() => setisCollapsed(!isCollapsed)}
					className={`w-5 h-5 duration-300 bg-white flex justify-center items-center rounded-full   ${
						isCollapsed
							? " absolute left-[65px] top-[25px]"
							: "absolute left-[240px] rotate-180"
					}`}>
					<IoIosArrowForward />
				</div>
			</div>
			<div className={`${isCollapsed ? "p-2 mt-3" : "p-4 mt-5 "}`}>
				<MenuItems isCollapsed={isCollapsed} />
			</div>
		</div>
	);
};

export default Sidebar;
