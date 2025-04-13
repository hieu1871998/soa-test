'use client';

import Link from 'next/link';
import { Header as AriaHeader } from 'react-aria-components';
import { HeaderMenu } from './header.menu';
import { NavigationBar } from './header.nav';

export const Header = ({ data }: { data: string[] }) => {
	return (
		<AriaHeader className='bg-header fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-4 py-2.5 backdrop-blur-[7.5px] md:px-8 md:py-2.5 lg:py-2 xl:px-25 2xl:px-[21.25rem] 2xl:py-3'>
			<Link
				href='#'
				className='flex items-center py-2 pr-[.2969rem] text-[.9375rem] font-bold text-white'
			>
				LOGO SAMPLE
			</Link>
			<NavigationBar data={data} />
			<HeaderMenu />
		</AriaHeader>
	);
};
