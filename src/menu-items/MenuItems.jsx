import { Link, useLocation } from "react-router-dom";
import menuItems from "./MenuRoutes/MenuItemsRoutes";
import ThemeColor from "../GlobalColor";
const MenuItems = ({ isCollapsed }) => {
	const location = useLocation();
	return (
		<div>
			{menuItems.map((items, index) => {
				const isActive = location.pathname === items.url;
				return (
					<div key={index}>
						<div className=''>
							{isCollapsed ? (
								<Link to={items.url}>
									<div
										className={`flex  mb-9  justify-center items-center pt-2 pb-2 hover:bg-gray-100/15 rounded-md ${
											isActive ? " bg-[#514C77] text-white" : ""
										}`}>
										<div className=''>{items.icon}</div>
									</div>
								</Link>
							) : (
								<Link to={items.url}>
									<div
										className={`flex gap-3 mb-9 items-center justify-start pl-10 pr-10 pt-2 pb-2 duration-300  hover:bg-gray-100/15 hover:font-semibold rounded-md ${
											isActive ? " bg-[#514C77] text-white" : ""
										}`}>
										<div className=''>{items.icon}</div>
										<div>
											<p
												style={{
													color: `${
														isActive
															? `${ThemeColor.accent_color}`
															: `${ThemeColor.text}`
													}`,
													fontWeight: `${isActive ? "600" : ""}`,
												}}>
												{items.title}
											</p>
										</div>
									</div>
								</Link>
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default MenuItems;
