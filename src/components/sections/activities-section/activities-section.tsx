'use client';

import { icons, InteractiveMap, Marker } from '@/components/interactive-map/interactive-map';
import { Bloc2, CartePoint } from '@/lib/types';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../../ui/button';
import { SectionTitle } from '../../ui/section-title';

export const ActivitiesSection = ({ data, cartePoints }: { data: Bloc2; cartePoints: CartePoint[] }) => {
	const [active, setActive] = useState<Marker>();

	const handleChange = (marker: Marker | undefined) => {
		setActive(marker);
	};

	return (
		<motion.section
			className='bg-section-accent relative px-4 py-8 md:px-8'
			layout
		>
			<Image
				className='shutterstock-sm md:shutterstock-md lg:shutterstock-lg xl:shutterstock-xl object-cover object-center'
				src='/shutterstock-sample.png'
				alt='Sample Image'
				fill
				sizes='100vw'
			/>
			<motion.div
				className='relative z-[1] mx-auto flex max-w-[77.5rem] flex-col gap-5 md:gap-6'
				layout
			>
				<SectionTitle>{data.title}</SectionTitle>
				<AnimatePresence initial={false}>
					{active ? (
						<motion.div
							className='flex flex-wrap content-center items-center justify-center gap-2 self-stretch'
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0 }}
							layout
						>
							{active?.activities.map((activity, index) => (
								<Button
									key={activity}
									variant='activity'
									leftSection={icons[index % icons.length]}
								>
									{activity}
								</Button>
							))}
						</motion.div>
					) : null}
				</AnimatePresence>
				<motion.div
					id='map'
					className='bg-primary h-[37.5rem] w-full rounded-[1.25rem] md:h-[43.625rem]'
					layout
				>
					<InteractiveMap
						data={cartePoints}
						onChange={handleChange}
					/>
				</motion.div>
			</motion.div>
		</motion.section>
	);
};
