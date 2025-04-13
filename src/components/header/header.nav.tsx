import { cn } from '@/utils/cn';
import Link from 'next/link';

export const NavigationBar = ({ data }: { data: string[] }) => {
	return (
		<nav className='absolute hidden h-5 lg:left-[318px] lg:flex xl:left-[18.625rem] 2xl:left-[33.625rem]'>
			<ul className='flex items-center gap-6'>
				{data.map((item, index) => (
					<NavigationItem
						label={item}
						key={item}
						href='#'
					/>
				))}
			</ul>
		</nav>
	);
};

export const NavigationItem = ({ className, label, href }: { className?: string; label: string; href: string }) => {
	return (
		<li
			className={cn(
				'text-navlink hover:text-navlink-hover flex h-[1.3125rem] items-center text-base leading-normal font-medium capitalize transition-colors duration-300 ease-out',
				className
			)}
		>
			<Link href={href}>{label}</Link>
		</li>
	);
};
