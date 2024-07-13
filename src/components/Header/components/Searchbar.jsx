import { IoIosSearch } from "react-icons/io";
import ThemeColor from "../../../GlobalColor";
const Searchbar = () => {
	return (
		<div
			className='flex gap-2 hidden lg:flex justify-center items-center px-2 rounded-md '
			style={{ border: `2px solid ${ThemeColor.secondary}` }}>
			<IoIosSearch color={`${ThemeColor.secondary}`} size={30} />

			<input
				className='text-white border-white  bg-[#211D42] w-[250px]  focus:outline-none  p-2'
				type='text'
				placeholder='Search...'
			/>
		</div>
	);
};

export default Searchbar;
