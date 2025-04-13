import { FacebookIcon } from '@/icons/facebook';
import { InstagramIcon } from '@/icons/instagram';
import { YoutubeIcon } from '@/icons/youtube';
import { Footer as FooterType } from '@/lib/types';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { LocaleSwitcher } from '../locale-switcher';

export const Footer = ({ data }: { data: FooterType }) => {
	return (
		<footer className='bg-secondary-foreground flex flex-col items-center justify-center'>
			<div className='mx-auto flex w-full max-w-[77.5rem] flex-col items-center justify-center gap-8 self-stretch px-4 py-8 md:gap-10 md:px-8 md:py-10 xl:px-0'>
				<div
					className='h-20 md:hidden'
					id='footer-logo'
				/>
				<div className='flex flex-col items-center justify-center gap-6 self-stretch md:flex-row md:justify-between'>
					<div className='text-center leading-6 text-white md:text-left'>
						<p>{data.address.name}</p>
						<p>{data.address.phone}</p>
						<p>{data.address.location}</p>
					</div>
					<ul className='flex flex-col items-start gap-3 self-stretch md:block md:columns-2'>
						{data.links.map(link => (
							<li
								key={link.name}
								className='mx-auto md:mx-0 md:text-right'
							>
								<Link
									className='text-center text-white/60'
									href={link.url}
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
					<SocialLinks className='md:hidden' />
				</div>
				<div className='w-full justify-between border-t border-t-white/15 pt-6 md:flex'>
					<p className='text-center text-sm text-white md:text-base'>© BASIC 2024</p>
					<SocialLinks className='hidden md:flex' />
				</div>
				<LocaleSwitcher />
			</div>
		</footer>
	);
};

const SocialLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
	return (
		<Link
			className='bg-primary flex items-center gap-2 rounded-full p-1 text-2xl text-white'
			href={href}
		>
			{children}
		</Link>
	);
};

const SocialLinks = ({ className }: { className?: string }) => {
	return (
		<div className={cn('flex gap-4', className)}>
			<SocialLink href='#'>
				<FacebookIcon />
			</SocialLink>
			<SocialLink href='#'>
				<InstagramIcon />
			</SocialLink>
			<SocialLink href='#'>
				<YoutubeIcon />
			</SocialLink>
		</div>
	);
};
