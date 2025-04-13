import { ArrowUpRightIcon } from '@/icons/arrow-up-right';
import { cn } from '@/utils/cn';
import Image, { StaticImageData } from 'next/image';
import { Button } from '../button';

export interface CardProps extends React.ComponentProps<'div'> {
	thumbnail: StaticImageData;
	subtitle: string;
	title: string;
	description: string;
	cta?: string;
	inCarousel?: boolean;
}

export const Card = ({ thumbnail, subtitle, title, description, cta, className, inCarousel, ...props }: CardProps) => {
	return (
		<div
			className={cn('flex flex-col items-start gap-4', className)}
			{...props}
		>
			{thumbnail ? (
				<Image
					className='aspect-video h-auto w-full rounded-lg object-cover object-center md:aspect-square'
					src={thumbnail}
					alt={title}
					width={400}
					height={400}
				/>
			) : null}
			<div className='flex flex-col items-start justify-center gap-2 md:gap-4 lg:gap-6'>
				<div className='flex flex-col items-start justify-center gap-2 lg:gap-4'>
					<div className='flex flex-col items-start gap-0.5 self-stretch md:gap-1'>
						<p className='text-primary text-xs leading-normal font-medium md:text-base'>{subtitle}</p>
						<h2 className='text-secondary-foreground leading-none font-medium tracking-normal md:text-xl md:leading-7'>
							{title}
						</h2>
					</div>
					<p
						className={cn(
							'mb-7 text-sm leading-none tracking-[-1%] md:mb-0 md:text-base md:leading-6 md:tracking-[-0.01rem]',
							inCarousel ? 'ml-1 line-clamp-3 border-l border-[#bbb] pl-2 md:ml-2 md:pl-3 xl:pl-4' : 'line-clamp-2'
						)}
					>
						{description}
					</p>
				</div>
				{cta ? (
					<Button
						className='border-secondary-foreground/30 border-[1.5px] xl:min-w-60'
						variant='reserve-secondary'
						size='sm'
						rightSection={<ArrowUpRightIcon className='text-green' />}
					>
						{cta}
					</Button>
				) : null}
			</div>
		</div>
	);
};
