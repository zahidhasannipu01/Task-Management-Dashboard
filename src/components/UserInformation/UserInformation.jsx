import BG from "../../assets/background/user-profile/bg.jpg";
import NotificationIcon from "./components/NotificationIcon";
import UserProfile from "./components/UserProfile";
const UserInformation = () => {
	return (
		<div
			className='w-[250px]  px-5 flex  flex-col hidden  lg:block text-white'
			style={{
				backgroundImage: `url(${BG})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}>
			<div className='mt-7 flex items-end justify-end'>
				<NotificationIcon />
			</div>
			<div className='mt-20'>
				<UserProfile />
			</div>
		</div>
	);
};

export default UserInformation;
