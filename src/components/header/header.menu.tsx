import { ArrowUpRightIcon } from '@/icons/arrow-up-right';
import { CrosshairIcon } from '@/icons/crosshair';
import { FishingIcon } from '@/icons/fishing';
import { MenuIcon } from '@/icons/menu';
import { MountainsIcon } from '@/icons/mountains';
import { cn } from '@/utils/cn';
import { Button as AriaButton, ButtonProps, Dialog, DialogTrigger, Popover } from 'react-aria-components';
import { Button } from '../ui/button';
import { NavigationItem } from './header.nav';

export const HeaderMenu = ({ navItems }: { navItems: string[] }) => {
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
			</Button>
			<DialogTrigger>
				<Button
					className='inline-flex lg:hidden'
					variant='ghost'
					size='icon'
				>
					<MenuIcon />
				</Button>
				<Popover
					offset={20}
					className='entering:animate-in entering:fade-in entering:placement-bottom:slide-in-from-top-1 entering:placement-top:slide-in-from-bottom-1 entering:placement-left:slide-in-from-right-1 entering:placement-right:slide-in-from-left-1 bg-secondary-foreground/70 rounded-3xl backdrop-blur-[7.5px] duration-300 ease-out lg:hidden'
				>
					<Dialog className='flex flex-col gap-4 p-4'>
						<ul className='flex flex-col gap-2'>
							{navItems.map(item => (
								<NavigationItem
									className='text-xl'
									label={item}
									key={item}
									href='#'
								/>
							))}
						</ul>
						<div className='bg-primary/50 h-0.5 w-full' />
						<div className='flex justify-between gap-2'>
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
						<Button variant='reserve'>Réservez Maintenant</Button>
					</Dialog>
				</Popover>
			</DialogTrigger>
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
