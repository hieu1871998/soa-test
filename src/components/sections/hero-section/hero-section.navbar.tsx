import { CrosshairOutlinedIcon } from '@/icons/crosshair-outlined';
import { FishingOutlinedIcon } from '@/icons/fishing-outlined';
import { MountainsOutlinedIcon } from '@/icons/mountains-outlined';

const items: HeroSectionNavigationItemProps[] = [
	{
		label: 'Activité 1',
		icon: <MountainsOutlinedIcon />,
	},
	{
		label: 'Activité 2',
		icon: <FishingOutlinedIcon />,
	},
	{
		label: 'Activité 3',
		icon: <CrosshairOutlinedIcon />,
	},
];

export const HeroSectionNavigationBar = ({ bannerMenu = [] }: { bannerMenu?: string[] }) => {
	const bannerItems = bannerMenu.map((item, index) => ({
		label: item,
		icon: items[index].icon ?? <CrosshairOutlinedIcon />,
	}));

	return (
		<nav className='absolute right-0 bottom-0 left-0 overflow-x-visible overflow-y-hidden pb-9 md:pb-10 xl:pb-20'>
			<ul className='mx-auto flex w-full items-center justify-between border-t border-white/30 px-4 md:px-8 lg:gap-6 xl:w-[77.5rem] xl:gap-0 xl:px-20'>
				{bannerItems.map(item => (
					<HeroSectionNavigationItem
						key={item.label}
						icon={item.icon}
						label={item.label}
					/>
				))}
			</ul>
		</nav>
	);
};

interface HeroSectionNavigationItemProps {
	icon: React.ReactNode;
	label: string;
}

const HeroSectionNavigationItem = ({ icon, label }: HeroSectionNavigationItemProps) => {
	return (
		<li className='group relative flex flex-1 cursor-pointer flex-col items-center gap-2 py-6 md:gap-3.5 lg:gap-3 xl:gap-3.5 xl:py-5'>
			<div className='absolute top-0 right-0 left-0 h-1 w-full bg-white to-50% opacity-0 transition-all duration-300 ease-out group-hover:opacity-100' />
			<div className='absolute -top-[15.4375rem] z-0 mx-auto h-[11.4375rem] w-[24.0625rem] shrink-0 rounded-[385px] bg-white opacity-30 blur-2xl transition-all duration-300 ease-out group-hover:-top-32' />
			<span className='text-2xl text-white md:text-[1.75rem] lg:text-[2rem] xl:text-[2.5rem]'>{icon}</span>
			<p className='text-center text-sm leading-4 font-semibold tracking-[.0437rem] text-white uppercase transition-all duration-300 ease-out md:text-lg md:tracking-[.0563rem] lg:tracking-[.0625rem] xl:translate-y-32 xl:text-xl xl:group-hover:translate-y-0'>
				{label}
			</p>
		</li>
	);
};
