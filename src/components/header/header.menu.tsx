import { ArrowUpRightIcon } from '@/icons/arrow-up-right';
import { CrosshairIcon } from '@/icons/crosshair';
import { FishingIcon } from '@/icons/fishing';
import { MenuIcon } from '@/icons/menu';
import { MountainsIcon } from '@/icons/mountains';
import { cn } from '@/utils/cn';
import { Button as AriaButton, ButtonProps } from 'react-aria-components';
import { Button } from '../ui/button';

export const HeaderMenu = () => {
	return (
		<div className='flex items-center gap-5'>
			<div className='hidden items-center gap-4 text-2xl text-white lg:flex'>
				<HeaderMenuIcon aria-label='Mountain'>
					<MountainsIcon />
				</HeaderMenuIcon>
				<HeaderMenuIcon aria-label='Fishing'>
					<FishingIcon />
				</HeaderMenuIcon>
				<HeaderMenuIcon aria-label='Target'>
					<CrosshairIcon />
				</HeaderMenuIcon>
			</div>
			<Button
				variant='reserve'
				rightSection={<ArrowUpRightIcon />}
				classNames={{
					root: cn('hidden gap-0 hover:gap-2 lg:inline-flex'),
					label: cn(
						'w-0 overflow-hidden whitespace-nowrap group-hover:w-40 hover:overflow-visible xl:translate-x-36 xl:opacity-0 xl:group-hover:translate-x-0 xl:group-hover:opacity-100'
					),
				}}
			>
				<span className='hidden xl:inline'>Réservez Maintenant</span>
				{/* <span className='inline xl:hidden'>Contactez-nous</span> */}
			</Button>
			<Button
				className='inline-flex lg:hidden'
				variant='ghost'
				size='icon'
			>
				<MenuIcon />
			</Button>
		</div>
	);
};

const HeaderMenuIcon = (props: ButtonProps) => {
	return (
		<AriaButton
			{...props}
			className='text-header-menu-icon hover:text-primary shrink-0 text-[1.75rem] transition-all duration-300 ease-out'
		></AriaButton>
	);
};
