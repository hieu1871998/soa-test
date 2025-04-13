import { MountainsOutlinedIcon } from '@/icons/mountains-outlined';
import { Bloc2 } from '@/lib/types';
import Image from 'next/image';
import { Button } from '../../ui/button';
import { SectionTitle } from '../../ui/section-title';

const activities = ['Activité 1', 'Activité 2', 'Activité 3'];

export const ActivitiesSection = ({ data }: { data: Bloc2 }) => {
	return (
		<section className='bg-section-accent relative px-4 py-8 md:px-8'>
			<Image
				className='shutterstock-sm md:shutterstock-md lg:shutterstock-lg xl:shutterstock-xl object-cover object-center'
				src='/shutterstock-sample.png'
				alt='Sample Image'
				fill
				sizes='100vw'
			/>
			<div className='relative z-[1] mx-auto flex max-w-[77.5rem] flex-col gap-5 md:gap-6'>
				<SectionTitle>{data.title}</SectionTitle>
				<div className='flex flex-wrap content-center items-center justify-center gap-2 self-stretch'>
					{data.cases.map(activity => (
						<Button
							key={activity}
							variant='activity'
							leftSection={<MountainsOutlinedIcon />}
						>
							{activity}
						</Button>
					))}
				</div>
				<div
					id='map'
					className='bg-primary h-[37.5rem] w-full rounded-[1.25rem] opacity-5 md:h-[43.625rem]'
				></div>
			</div>
		</section>
	);
};
