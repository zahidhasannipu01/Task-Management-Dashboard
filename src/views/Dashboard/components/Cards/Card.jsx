import { Slider } from "@mui/material";
import CardSvg from "../../../../assets/icons/card/card.svg";
import CardSvg2 from "../../../../assets/icons/card/card2.svg";
import CardSvg3 from "../../../../assets/icons/card/card3.svg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ThemeColor from "../../../../GlobalColor";
const theme = createTheme({
	palette: {
		slider: {
			card1: ThemeColor.oceanGreen,
			card2: ThemeColor.limeGreen,
		},
	},
});

const Card = () => {
	return (
		<div className='flex flex flex-col  lg:flex-row justify-center items-center gap-8'>
			<div
				className='w-[320px] h-[260px]  p-10'
				style={{
					backgroundImage: `url(${CardSvg})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "contain",
				}}>
				<div className='flex justify-between items-center'>
					<div className='flex p-1 -space-x-2 overflow-hidden'>
						<img
							className='inline-block h-8 w-8 rounded-full ring-2 ring-white'
							src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
							alt=''
						/>
						<img
							className='inline-block h-8 w-8 rounded-full ring-2 ring-white'
							src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
							alt=''
						/>
						<img
							className='inline-block h-8 w-8 rounded-full ring-2 ring-white'
							src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
							alt=''
						/>
						<img
							className='inline-block h-8 w-8 rounded-full ring-2 ring-white'
							src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
							alt=''
						/>
						<span
							className='inline-block font-medium h-8 w-8 rounded-full ring-2 bg-white flex justify-center items-center ring-white'
							src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
							alt=''>
							7+
						</span>
					</div>
					<div>
						<BsThreeDotsVertical className='cursor-pointer' size={20} />
					</div>
				</div>
				<div>
					<p className='text-xl font-semibold mt-6'>
						UI/UX <br /> Development
					</p>
				</div>
				<div className='mt-5'>
					<p className='text-sm mb-1 '>15 Task | 80%</p>

					<ThemeProvider theme={theme}>
						<Slider
							aria-label='Temperature'
							defaultValue={30}
							sx={{
								color: theme.palette.slider.card1,
							}}
						/>
					</ThemeProvider>
				</div>
			</div>
			<div
				className='w-[320px] h-[260px] p-10'
				style={{
					backgroundImage: `url(${CardSvg2})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "contain",
				}}>
				<div className='flex justify-between items-center'>
					<div className='flex p-1 -space-x-2 overflow-hidden'>
						<img
							className='inline-block h-8 w-8 rounded-full ring-2 ring-white'
							src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
							alt=''
						/>
						<img
							className='inline-block h-8 w-8 rounded-full ring-2 ring-white'
							src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
							alt=''
						/>
						<img
							className='inline-block h-8 w-8 rounded-full ring-2 ring-white'
							src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
							alt=''
						/>
						<img
							className='inline-block h-8 w-8 rounded-full ring-2 ring-white'
							src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
							alt=''
						/>
						<span
							className='inline-block font-medium h-8 w-8 rounded-full ring-2 bg-white flex justify-center items-center ring-white'
							src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
							alt=''>
							7+
						</span>
					</div>
					<div>
						<BsThreeDotsVertical className='cursor-pointer' size={20} />
					</div>
				</div>
				<div>
					<p className='text-xl font-semibold mt-6'>
						UI/UX <br /> Development
					</p>
				</div>
				<div className='mt-5'>
					<p className='text-sm mb-1 '>15 Task | 80%</p>

					<ThemeProvider theme={theme}>
						<Slider
							aria-label='Temperature'
							defaultValue={30}
							sx={{
								color: theme.palette.slider.card2,
							}}
						/>
					</ThemeProvider>
				</div>
			</div>
			<div
				className='w-[320px] h-[260px] p-10'
				style={{
					backgroundImage: `url(${CardSvg3})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "contain",
				}}>
				<div className='flex justify-between items-center'>
					<div className='flex p-1 -space-x-2 overflow-hidden'>
						<img
							className='inline-block h-8 w-8 rounded-full ring-2 ring-white'
							src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
							alt=''
						/>
						<img
							className='inline-block h-8 w-8 rounded-full ring-2 ring-white'
							src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
							alt=''
						/>
						<img
							className='inline-block h-8 w-8 rounded-full ring-2 ring-white'
							src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
							alt=''
						/>
						<img
							className='inline-block h-8 w-8 rounded-full ring-2 ring-white'
							src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
							alt=''
						/>
						<span
							className='inline-block font-medium h-8 w-8 rounded-full ring-2 bg-white flex justify-center items-center ring-white'
							src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
							alt=''>
							7+
						</span>
					</div>
					<div>
						<BsThreeDotsVertical className='cursor-pointer' size={20} />
					</div>
				</div>
				<div>
					<p className='text-xl font-semibold mt-6'>
						UI/UX <br /> Development
					</p>
				</div>
				<div className='mt-5'>
					<p className='text-sm mb-1 '>15 Task | 80%</p>

					<ThemeProvider theme={theme}>
						<Slider
							aria-label='Temperature'
							defaultValue={30}
							sx={{
								color: theme.palette.slider.card2,
							}}
						/>
					</ThemeProvider>
				</div>
			</div>
			<div
				className='w-[320px] h-[260px] p-10'
				style={{
					backgroundImage: `url(${CardSvg})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "contain",
				}}>
				<div className='flex justify-between items-center'>
					<div className='flex p-1 -space-x-2 overflow-hidden'>
						<img
							className='inline-block h-8 w-8 rounded-full ring-2 ring-white'
							src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
							alt=''
						/>
						<img
							className='inline-block h-8 w-8 rounded-full ring-2 ring-white'
							src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
							alt=''
						/>
						<img
							className='inline-block h-8 w-8 rounded-full ring-2 ring-white'
							src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
							alt=''
						/>
						<img
							className='inline-block h-8 w-8 rounded-full ring-2 ring-white'
							src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
							alt=''
						/>
						<span
							className='inline-block font-medium h-8 w-8 rounded-full ring-2 bg-white flex justify-center items-center ring-white'
							src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
							alt=''>
							7+
						</span>
					</div>
					<div>
						<BsThreeDotsVertical className='cursor-pointer' size={20} />
					</div>
				</div>
				<div>
					<p className='text-xl font-semibold mt-5'>
						UI/UX <br /> Development
					</p>
				</div>
				<div className='mt-7'>
					<p className='text-sm mb-1 '>15 Task | 80%</p>
					<ThemeProvider theme={theme}>
						<Slider
							aria-label='Temperature'
							defaultValue={30}
							sx={{
								color: theme.palette.slider.card1,
							}}
						/>
					</ThemeProvider>
				</div>
			</div>
		</div>
	);
};

export default Card;
