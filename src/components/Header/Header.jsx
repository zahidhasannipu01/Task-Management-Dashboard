import ThemeColor from "../../GlobalColor";
import Searchbar from "./components/Searchbar";
import SiteTitle from "./components/SiteTitle";

ThemeColor;

const Header = () => {
	return (
		<div
			className='fixed w-full z-50 lg:static lg:w-auto lg:z-auto h-[60px] pt-2 lg:pt-5 px-5 lg:px-20 mb-6 lg:mb-0 flex justify-center lg:justify-between items-center lg:rounded-tr-3xl'
			style={{ backgroundColor: `${ThemeColor.primary}` }}>
			<SiteTitle />
			<Searchbar />
		</div>
	);
};

export default Header;
