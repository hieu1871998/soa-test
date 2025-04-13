import ThumbnailA from '../../../../public/thumbnail-1.png';
import ThumbnailB from '../../../../public/thumbnail-2.png';

import ThumbnailC from '../../../../public/thumbnail-3.png';

import { Bloc1 } from '@/lib/types';
import { Card } from '../../ui/card';
import { SectionTitle } from '../../ui/section-title';

const thumbnails = [ThumbnailA, ThumbnailB, ThumbnailC];

export const AdventureSection = ({ data }: { data: Bloc1 }) => {
	const cases = data.cases.map((item, index) => ({
		title: item.tagline,
		description: item.description,
		thumbnail: thumbnails[index],
		cta: item.cta,
	}));

	return (
		<section className='mb-10 px-4 py-6 md:mb-20 md:px-8 lg:mb-14 xl:mb-20'>
			<div className='mx-auto flex max-w-[77.5rem] flex-col gap-5 md:gap-10'>
				<div className='flex flex-col items-center justify-center gap-1 md:gap-2 lg:gap-4'>
					<SectionTitle
						className='mb-1'
						classNames={{ decoration: 'hidden md:block' }}
					>
						{data.title}
					</SectionTitle>
					<p className='text-center text-sm md:text-base lg:text-xl xl:text-2xl'>{data.subtitle}</p>
				</div>
				<div className='grid grid-cols-1 gap-6 md:grid-cols-3 md:flex-row md:gap-8'>
					{cases.map(item => (
						<Card
							key={item.title}
							description={item.description}
							cta={item.cta}
							title={item.title}
							thumbnail={item.thumbnail}
							subtitle={item.title}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
