import { GlobeIcon } from '@/icons/globe';
import { HandShakeIcon } from '@/icons/handshake';
import { PersonalizationIcon } from '@/icons/personalization';
import { ShieldIcon } from '@/icons/shield';
import { SmileyIcon } from '@/icons/smiley';
import { Bloc4 } from '@/lib/types';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Thumbnail from '../../../../public/experiences-thumbnail.png';

const icons = [
	<ShieldIcon key='shield' />,
	<HandShakeIcon key='handshake' />,
	<GlobeIcon key='globe' />,
	<PersonalizationIcon key='personalization' />,
	<SmileyIcon key='smiley' />,
];

export const ExperiencesSection = ({ data }: { data: Bloc4 }) => {
	return (
		<section className='mt-18 flex w-full flex-col gap-6 pb-10 md:pb-36 xl:pb-[11.25rem]'>
			<div className='relative mx-auto w-full max-w-[77.5rem] gap-8 px-4 py-8 md:flex md:px-8 lg:py-15 xl:px-0'>
				<div className='relative z-[1] flex flex-col items-start gap-6 rounded-2xl bg-white/60 px-3 py-4 backdrop-blur-[7.5px] md:w-1/2 lg:w-auto'>
					<h1 className='text-primary text-2xl font-semibold uppercase md:text-[2rem] lg:text-[2.5rem] xl:text-5xl'>
						<span>{data.title}</span>
						<span className='text-primary/60'>{` ${data.subtitle}`}</span>
					</h1>
					<div className='flex flex-col gap-2'>
						<div className='relative pl-2 md:pl-20 lg:pl-28'>
							<div className='absolute top-0 bottom-0 left-0 w-0.5 bg-[#BBB] md:top-1/2 md:bottom-1/2 md:h-0.5 md:w-8 lg:w-20' />
							<p className='text-secondary-foreground font-semibold capitalize md:text-xl lg:text-2xl xl:text-[1.75rem]'>
								{data.text_title}
							</p>
						</div>
						<p className='text-sm tracking-[-0.5px] md:text-base lg:pl-28 xl:text-lg'>{data.text}</p>
					</div>
				</div>
				<Image
					src={Thumbnail}
					alt='Experiences Thumbnail'
					className='absolute inset-0 h-full w-full object-cover object-center md:relative md:w-1/2 md:rounded-[10px] lg:aspect-square lg:w-[25rem]'
				/>
			</div>
			<div className='mx-auto grid max-w-[77.5rem] grid-cols-2 gap-x-4 gap-y-6 px-4 md:grid-cols-6 md:px-16 lg:grid-cols-5 xl:px-0'>
				{data.pictos.map((picto, index) => (
					<div
						key={`${picto.title}${picto.description}`}
						className={cn(
							'col-span-1 flex flex-col items-center gap-2 last-of-type:col-span-2 md:col-span-2 md:last-of-type:col-span-3 md:nth-[4]:col-span-3 lg:col-span-1 lg:last-of-type:col-span-1 lg:nth-[4]:col-span-1'
						)}
					>
						<div className='bg-green flex w-fit items-center rounded-full p-2.5 text-xl text-white'>{icons[index]}</div>
						<div>
							<p className='text-secondary-foreground text-center font-medium md:text-lg xl:text-2xl'>{picto.title}</p>
							<p className='text-center text-sm lg:text-base xl:text-lg'>{picto.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
