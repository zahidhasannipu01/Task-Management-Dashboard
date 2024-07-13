import profilePicture from "../../../assets/background/user-profile/profile_picture.png";
import EditIcon from "../../../assets/icons/user-profile/button.svg";
const UserProfile = () => {
	return (
		<div className='flex flex-col justify-center items-center'>
			<div>
				<img className='w-[64px] h-[64px]' src={profilePicture} alt='' />
			</div>
			<div className=' text-center'>
				<p className='text-lg font-semibold mt-3'>Sultan Galib</p>
				<p className='text-sm '>UI UX Designer</p>
			</div>
			<div>
				<button
					className='flex gap-2 mt-4 items-center bg-[#02575C] px-2 py-1 rounded-md'
					type='submit'>
					<img src={EditIcon} />
					<p>Edit Profile</p>
				</button>
			</div>
		</div>
	);
};

export default UserProfile;
