'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SectionTitle } from '@/components/ui/section-title';
import { ArrowRightIcon } from '@/icons/arrow-right';
import { Bloc3 } from '@/lib/types';
import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';
import ThumbnailA from '../../../../public/thumbnail-4.png';
import ThumbnailB from '../../../../public/thumbnail-5.png';
import ThumbnailC from '../../../../public/thumbnail-6.png';

const thumbnails = [ThumbnailA, ThumbnailB, ThumbnailC];

export const ExploreSection = ({ data }: { data: Bloc3 }) => {
	const [emblaRef] = useEmblaCarousel({ dragFree: true });

	return (
		<section className='flex flex-col gap-4 pt-18 md:gap-8 md:pt-20 lg:gap-9'>
			<div className='mx-auto flex w-full max-w-[77.5rem] items-end justify-between px-4 md:px-8 xl:px-0'>
				<SectionTitle
					decorationDisabled
					classNames={{
						title: 'text-center md:text-left',
					}}
				>
					{data.title}
				</SectionTitle>
				<Link
					className='hidden gap-1 border-b border-[#666] leading-[150%] font-medium text-[#666] capitalize md:flex md:shrink-0 md:text-xl'
					href='#'
				>
					{data.more_info}
					<ArrowRightIcon className='text-xl md:text-2xl' />
				</Link>
			</div>
			<div className='mx-auto flex w-screen flex-col items-start gap-6 self-stretch xl:max-w-[77.5rem]'>
				<div
					ref={emblaRef}
					className='w-full overflow-hidden xl:overflow-visible'
				>
					<div
						className='flex w-full'
						ref={emblaRef}
					>
						{data.cases.map((item, index) => (
							<div
								className='mr-4 max-w-full min-w-0 flex-[0_0_auto] first-of-type:ml-4 md:mr-8 first-of-type:md:ml-18 xl:mr-14 xl:ml-auto'
								key={item.tagline}
							>
								<Card
									className='max-w-[12.5rem] md:max-w-[17.5rem] lg:max-w-[21.25rem]'
									description={item.description}
									title={item.tagline}
									subtitle={item.category}
									cta={item.cta}
									thumbnail={thumbnails[index] ?? ThumbnailA}
									inCarousel
								/>
							</div>
						))}
					</div>
				</div>
				<div className='block w-full px-4 md:hidden'>
					<Button
						variant='reserve'
						className='w-full'
						rightSection={<ArrowRightIcon />}
					>
						{data.more_info}
					</Button>
				</div>
			</div>
		</section>
	);
};
