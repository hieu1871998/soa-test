import Image from 'next/image';
import HeroImage from './hero-image.png';
import { HeroSectionNavigationBar } from './hero-section.navbar';

export const HeroSection = ({ bannerMenu = [] }: { bannerMenu?: string[] }) => {
	return (
		<section className='relative mb-10 h-[50.75rem] lg:h-[52.125rem] 2xl:aspect-video 2xl:h-auto'>
			<div className='absolute inset-0 bg-linear-180 from-transparent from-[73%] to-black/30 to-[85.5%]' />
			<video
				className='h-full w-full object-cover object-center'
				width={1920}
				height={1080}
				controls={false}
				autoPlay
				loop
				preload='auto'
				playsInline
			>
				<source
					src='/hero-video.mov'
					type='video/mp4'
				/>
				<Image
					className='h-full w-full bg-linear-180 from-transparent from-[73%] to-black/30 to-[85.5%] object-cover object-center'
					src={HeroImage}
					alt='Hero Image'
					priority
				/>
			</video>
			<HeroSectionNavigationBar bannerMenu={bannerMenu} />
		</section>
	);
};
